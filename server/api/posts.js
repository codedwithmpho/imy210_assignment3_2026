// 25199902 - Mpho Makwela 
// purpose - MOCK API endpoint that returns blog data 
// this is because I had issues with Strapi :(
export default defineEventHandler(() => {
  return [
    {
      id: 1,
      title: "The Cost of Showing Up: Fuel Prices and Student Life",
      author: "Mpho M",
      snippet: "44% of UP students say fuel prices are affecting their ability to get to campus. This isn't just an economics story — it's a student story.",
      content: `
        <h1>The Cost of Showing Up</h1>
        <p>R3 up on petrol. R7 up on diesel. And somehow, we're still expected to show up like nothing's changed.</p>
        <p>44% of UP students say fuel prices are affecting their ability to get to campus. 60% say it's already impacting their academic performance.</p>
        <p>But what stayed with me wasn't just the numbers. It was the idea that something as basic as getting to class is no longer guaranteed.</p>
        <p>So when creating this visual for Perdeby Student News Issue 5, I didn't want to show petrol prices. I wanted to show pressure. Something constant. Something heavy. Something you can't ignore.</p>
        <p><strong>Article by Mandilive Mbethe — Visual by Me.</strong></p>
        <p>This is the start of my series: Visualising the Story.</p>
      `,
      category: "visual storytelling"
    },
    {
      id: 2,
      title: "I Painted in Virtual Reality — And It Changed How I Think About Creativity",
      author: "Mpho M",
      snippet: "Creativity feels completely different when you're no longer working on a flat screen.",
      content: `
        <h1>VR Painting: A New Dimension of Creativity</h1>
        <p>I recently took part in a Tilt Brush VR painting competition using a Google tool.</p>
        <p>What made it interesting was realizing that creativity feels completely different when you're no longer working on a flat screen.</p>
        <p>Instead of drawing on something, you're creating inside the space around you.</p>
        <p>As a BIS Multimedia student, moments like this remind me how quickly technology and creativity are merging.</p>
        <p>This was my first time creating an artwork in VR, and it won't be my last.</p>
      `,
      category: "tech experiments"
    },
    {
      id: 3,
      title: "From Summary to Visual: Designing Without a Brief",
      author: "Mpho M",
      snippet: "Sometimes at Perdeby, we don't get a detailed brief. Just a summary and a deadline.",
      content: `
        <h1>Turning Words Into Visuals</h1>
        <p>Sometimes at Perdeby Student News, we don't always get a detailed design brief. Sometimes we're given a summary of the article and asked to turn that into a visual.</p>
        <p>This one was about Varsity Cup ticket reselling. Some people were getting tickets cheaply and selling them at much higher prices.</p>
        <p>So I wanted the visual to communicate one thing instantly: MONEY FIRST.</p>
        <p>I used an exaggerated expression inspired by the unsettling grin from the Smile movie, tickets in hand, and a bold cartoon style to reflect the situation.</p>
        <p>It reminded me that creativity often starts with limited information. You take the message and find a way to make people feel it visually.</p>
      `,
      category: "design"
    },
    {
      id: 4,
      title: "Keep the Main Thing, the Main Thing",
      author: "Mpho M",
      snippet: "There's so much pressure in varsity to be everything. At some point, I tried to do all of it.",
      content: `
        <h1>Finding Focus in the Chaos</h1>
        <p>"Keep the main thing, the main thing." I heard this from Tebogo Moropa on TikTok last year, and it stuck.</p>
        <p>There's so much pressure in varsity to be everything: go to career fairs, join hackathons, be active outside of class, get good grades.</p>
        <p>At some point, I tried to do all of it. I got so caught up in being "well-rounded" that resting started to feel like a waste.</p>
        <p>But here's the truth I had to face: I'm here for a reason. And that reason is my studies.</p>
        <p>You don't have to do everything at once. Keep the main thing, the main thing.</p>
      `,
      category: "student life"
    },
    {
      id: 5,
      title: "I Joined a Web Team Knowing Zero WordPress",
      author: "Mpho M",
      snippet: "Before this, my idea of 'web' was mostly HTML and CSS. I learned the rest on the job.",
      content: `
        <h1>Learning WordPress From Scratch</h1>
        <p>I didn't know how to use WordPress when I joined Perdeby Student News. I made that clear in my interview. I just knew I was willing to learn.</p>
        <p>Before this, my idea of "web" was mostly HTML and CSS.</p>
        <p>Here's what I do now: upload and publish articles, format content so it's easy to read, check layout and structure.</p>
        <p>It's been interesting realising how much work goes into things people usually scroll past.</p>
      `,
      category: "web development"
    },
    {
      id: 6,
      title: "I Signed Up for a McKinsey Event — Then Realised I Didn't Know What Consulting Was",
      author: "Mpho M",
      snippet: "Hearing about a day in the life of a consultant made things click.",
      content: `
        <h1>What Even Is Consulting?</h1>
        <p>I signed up for a McKinsey Africa event at UP. Then realised I didn't actually know what they do. So I went to Google. 'Consulting.' Which led to: 'What even is consulting?'</p>
        <p>Anyway, fast forward to the actual event. Hearing about a day in the life of a consultant made things click.</p>
        <p>It's less about having the 'right answer' and more about how you approach problems in the first place. How you break things down. How you think through complexity. How you communicate clearly.</p>
        <p>Definitely not what I expected when I first signed up.</p>
      `,
      category: "career"
    },
    {
      id: 7,
      title: "I Made a Character for My Infographics",
      author: "Mpho M",
      snippet: "I don't just want to post. I want my content to be recognizable.",
      content: `
        <h1>Building a Visual Identity</h1>
        <p>Posted once and realised… I don't just want to post. I want my content to be recognizable.</p>
        <p>So I made a character that will appear in my infographics. It's a small step, but it gives me some structure while I figure things out.</p>
        <p>Still learning. Still experimenting. But now with a bit more intention. Let's see where this goes.</p>
      `,
      category: "personal branding"
    },
    {
      id: 8,
      title: "The Space Between Technology and Design",
      author: "Mpho M",
      snippet: "I'm a BIS Multimedia student exploring how technology, design, and student life intersect.",
      content: `
        <h1>Building in Public</h1>
        <p>I'm a BIS Multimedia student exploring how technology, design, and student life intersect. I focus on turning ideas, experiences, and systems into visual stories and simple explanations.</p>
        <p>My work sits across web, UX/UI, and digital media, with a growing focus on visual storytelling and communication.</p>
        <p>I'm still developing my direction, but I'm intentionally building in public and learning through doing.</p>
      `,
      category: "introduction"
    }
  ]
})