const Creatomate = require('creatomate');
const fetch = require('node-fetch');

// API keys passed to this script
const creatomateApiKey = 'creatomateApiKey'//process.argv[2];
const openAiApiKey = 'key-openAiApiKey'//process.argv[3];

// A topic on which you would like to generate a video. This will be passed on to ChatGPT.
// It will also be used as the intro text for the final video.
const topic = '5 điều cần làm của một lập trình viên trước khi già.';

// TODO: The ID of the template in your Creatomate account
const templateId = 'templateId-creatomate';

if (!creatomateApiKey || !openAiApiKey) {
  console.error('\n\n⚠️  To run this example, please specify your API keys as follows: node index.js CREATOMATE_API_KEY OPENAI_API_KEY');
  process.exit(1);
}

async function run() {

  console.log('Requesting a list of results from ChatGPT...');

  // Call OpenAI's API
  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${openAiApiKey}`,
    },
    body: JSON.stringify({
      // The model currently used by ChatGPT
      'model': 'gpt-3.5-turbo',
      //  Ask ChatGPT to tell us something about the provided topic,
      //  using additional instructions to get a useful response
      'messages': [{
        'role': 'user',
        'content': `${topic}. Tạo một danh sách gồm 5 câu ngắn được đánh số với nhiều biểu tượng cảm xúc. `
          + `Hightline những từ quan trọng nhất với [color #f1c40f] và [/color].`
      }],
    }),
  });

  // Catch any unsuccessful HTTP responses
  if (!response.ok) {
    console.error(`Error: OpenAI returned status code ${response.status}. `
      + `Make sure that you've provided a valid OpenAI API key`);
    process.exit(1);
  }

  // Parse ChatGPT's JSON response as a JavaScript object
  const data = await response.json();

  // Check if ChatGPT's response is as expected before continuing
  const reply = Array.isArray(data.choices) && data.choices[0].message?.content;
  if (typeof reply !== 'string') {
    console.error('Error: Received an unexpected response from OpenAI');
    process.exit(1);
  }

  // We'll parse the response and insert it into this variable
  const facts = {
    // "Intro-Text": "Hướng dẫn sử dụng ChatGPT làm một video 🦅",
    // "Fact-1": "1. [color #f1c40f]Golden eagles[/color] are found throughout the Northern Hemisphere, from North America to Europe and Asia. 🌍",
    // "Fact-2": "2. These birds are powerful hunters, able to take down prey as large as deer and mountain goats. 🦌",
    // "Fact-3": "3. [color #f1c40f]Golden eagles[/color] have a wingspan that can reach over 7 feet and can fly at speeds of up to 200 miles per hour! 🌬️",
    // "Fact-4": "4. Unlike many other bird species, [color #f1c40f]golden eagles[/color] mate for life and will often return to the same nest site year after year. 💕",
    // "Fact-5": "5. [color #f1c40f]Golden eagles[/color] have been important symbols in many cultures throughout history and are often associated with power, bravery, and freedom. 🌟"
  }

  // Iterate through ChatGPT's response line by line
  for (const textLine of reply.split(/\r?\n/)) {

    // Match list item by a regular expression (each list item starts with a digit)
    const matchResult = textLine.match(/^\d+?/);
    if (matchResult) {
      facts[`Fact-${matchResult[0]}`] = textLine;
    }
  }

  // Check if the response contains values for each text placeholder
  if (!facts['Fact-1'] || !facts['Fact-2'] || !facts['Fact-3'] || !facts['Fact-4'] || !facts['Fact-5']) {
    console.error('Error: Expected OpenAI to return a list of 5 sentences');
    process.exit(1);
  }

  console.log('Please wait while your video is being rendered...');

  const client = new Creatomate.Client(creatomateApiKey);

  // Render a video based on a template in your Creatomate project
  const renders = await client.render({
    // The ID of the template that we want to render
    templateId,
    // These are the modifications that are inserted into the template
    modifications: {
      'Intro-Text': topic,
      ...facts,
    },
  });

  console.log('Completed:', renders);
}

run()
  .catch(error => console.error(error));