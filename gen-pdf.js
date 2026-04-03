const PDFDocument = require('pdfkit');
const fs = require('fs');

const doc = new PDFDocument({ size: 'A4', margin: 50 });
doc.pipe(fs.createWriteStream('boardy-call-prep.pdf'));

const W = doc.page.width - 100;

function h1(t) { doc.fontSize(22).font('Helvetica-Bold').fillColor('#111').text(t); doc.moveDown(0.3); doc.moveTo(50, doc.y).lineTo(50+W, doc.y).strokeColor('#333').lineWidth(2).stroke(); doc.moveDown(0.5); }
function h2(t) { doc.moveDown(0.3); doc.fontSize(16).font('Helvetica-Bold').fillColor('#1a1a1a').text(t); doc.moveDown(0.3); }
function h3(t) { doc.moveDown(0.2); doc.fontSize(13).font('Helvetica-Bold').fillColor('#444').text(t); doc.moveDown(0.2); }
function p(t) { doc.fontSize(10.5).font('Helvetica').fillColor('#222').text(t, { lineGap: 3 }); doc.moveDown(0.2); }
function bullet(t) { doc.fontSize(10.5).font('Helvetica').fillColor('#222').text(`•  ${t}`, { indent: 10, lineGap: 3 }); }
function hr() { doc.moveDown(0.5); doc.moveTo(50, doc.y).lineTo(50+W, doc.y).strokeColor('#ddd').lineWidth(1).stroke(); doc.moveDown(0.5); }
function check(t) { doc.fontSize(10.5).font('Helvetica').fillColor('#222').text(`${t}`, { indent: 10, lineGap: 3 }); }
function quote(t) { 
  const y = doc.y;
  doc.rect(55, y, W-10, 50).fill('#f5f5f5');
  doc.moveTo(52, y).lineTo(52, y+50).strokeColor('#333').lineWidth(3).stroke();
  doc.fillColor('#222').fontSize(10.5).font('Helvetica-Oblique').text(t, 65, y+8, { width: W-30, lineGap: 3 });
  doc.y = y + 55;
}

// PAGE 1
h1('Boardy.ai Call Prep — Quick Reference');
p('Date: April 3, 2026  |  Time: ~11:00 AM EAT');
hr();

doc.addPage();
h2('PAGE 1: WHAT IS BOARDY & WHO THEY WORK WITH');
h3('What Boardy Actually Is');
bullet('AI "superconnector" — NOT an investor or a fund themselves');
bullet('You talk to an AI voice agent named Boardy via phone call');
bullet('Boardy learns who you are, what you\'re building, what you need');
bullet('Then it makes double opt-in warm introductions to the right people');
bullet('Think of it as: AI-powered networking on steroids');

h3('Key People');
bullet('Andrew D\'Souza — Founder/CEO (previously built a multibillion-dollar company)');
bullet('Tarik Sehovic, Jacob Kelly — team members');
bullet('Based in New York, but network is global');

h3('Their Funding (they raised for themselves)');
bullet('$3M pre-seed (Oct 2024) — led by HF0, with 8VC, Precursor, Afore, FJ Labs, NextView');
bullet('$8M seed (Jan 2025) — led by Creandum (top Swedish VC)');
bullet('Total raised: $11M across 19 investors');
bullet('Wild fact: Boardy the AI literally helped raise its own seed round');

h3('Who\'s In Their Network');
bullet('Thousands of founders, investors, and professionals globally');
bullet('Investors include: angels, pre-seed/seed VCs, Series A+ firms');
bullet('They work with everyone from solo founders to institutional investors');
bullet('Recent partnership: Stirlingshire Investments (NY-based fintech)');
bullet('They also launched a $200M venture fund and scout network');

h3('Types of Clients They Help');
bullet('Founders looking for investors (their bread and butter)');
bullet('Founders looking for co-founders, customers, advisors');
bullet('Investors looking for deal flow');
bullet('People trying to get into accelerator programs');

h3('What Boardy Does NOT Do');
bullet('They don\'t invest directly (though they have the $200M fund now)');
bullet('They don\'t close deals — they open doors');
bullet('They don\'t guarantee intros lead to investment');

// PAGE 2
doc.addPage();
h2('PAGE 2: YOUR GAME PLAN FOR THE CALL');

h3('Your Positioning');
p('You\'re a founder building an AI-powered Bitcoin Lightning payment platform (The Ark / thenode.it.com). You want to:');
bullet('Get into their network as a founder');
bullet('Get matched with seed-stage investors interested in AI + Bitcoin/Lightning');
bullet('Eventually raise a $1M seed round');

h3('What to Tell Boardy About You');
bullet('What you\'re building: AI agent platform that accepts Bitcoin Lightning payments — 120+ AI services, pay-per-task, no subscriptions');
bullet('Why it\'s unique: Intersection of AI + Bitcoin Lightning (L402 protocol) — micropayments for AI services, no credit cards needed');
bullet('Market: Global, especially emerging markets / unbanked populations');
bullet('Traction: Live product at thenode.it.com, real users, listed on Satring directory');
bullet('What you need: $1M seed to scale — marketing, infrastructure, team');

h3('Questions to Ask Them');
bullet('1. "How many investors in your network focus on AI + fintech/crypto?"');
bullet('2. "What stage investors do you match founders with most?"');
bullet('3. "What\'s the typical timeline from onboarding to first intro?"');
bullet('4. "How many intros does the average founder get?"');
bullet('5. "Is there a cost for founders, or is it free?"');
bullet('6. "Can you share success stories of founders who raised through Boardy?"');
bullet('7. "How does the $200M fund work — can it invest in companies it matches?"');

h3('Investor Types You\'d Be Matched With');
bullet('Pre-seed/Seed VCs ($250K–$2M checks)');
bullet('Crypto/Bitcoin-focused VCs');
bullet('AI-focused funds — hot space right now');
bullet('Angels — individual investors writing $25K–$100K checks');
bullet('Accelerators — Y Combinator, Techstars types');

h3('What $1M Seed Typically Looks Like');
bullet('Lead investor puts in 30-50% ($300K-$500K)');
bullet('Rest filled by 3-8 smaller investors/angels');
bullet('You\'ll need: pitch deck, clear metrics, team story');
bullet('Typical seed valuation for AI startups: $5M-$15M pre-money');
bullet('You\'d give up roughly 10-20% equity');

doc.addPage();
h3('Do\'s and Don\'ts');
doc.moveDown(0.2);
doc.fontSize(11).font('Helvetica-Bold').fillColor('#2d7d2d').text('DO:', { indent: 10 });
check('✅ Be specific about what you\'re building and why YOU are the person to build it');
check('✅ Mention the Bitcoin Lightning + AI intersection — it\'s a niche nobody owns yet');
check('✅ Talk about the Africa/emerging markets angle — VCs love underserved market plays');
check('✅ Show you have a live product (not just an idea)');
check('✅ Ask about their success metrics — shows you\'re serious');
doc.moveDown(0.3);
doc.fontSize(11).font('Helvetica-Bold').fillColor('#cc3333').text('DON\'T:', { indent: 10 });
check('❌ Don\'t oversell or exaggerate traction');
check('❌ Don\'t say you "need" the money (say you want to "accelerate growth")');
check('❌ Don\'t commit to anything on the call — this is exploratory');
check('❌ Don\'t ask for money directly — Boardy connects, they don\'t invest (mostly)');
check('❌ Don\'t be vague — "I\'m building an AI thing" is death. Be specific.');

h3('Your One-Liner (Practice This)');
doc.moveDown(0.2);
const qy = doc.y;
doc.rect(55, qy, W-10, 60).fill('#f5f5f5');
doc.moveTo(52, qy).lineTo(52, qy+60).strokeColor('#333').lineWidth(3).stroke();
doc.fillColor('#222').fontSize(10.5).font('Helvetica-Oblique').text(
  '"I\'m building The Ark — an AI platform where anyone in the world can access 120+ AI services and pay with Bitcoin Lightning. No credit cards, no subscriptions, just micropayments. We\'re live, we\'re growing, and we\'re looking for seed investors who understand AI and emerging markets."',
  65, qy+8, { width: W-30, lineGap: 3 }
);
doc.y = qy + 70;

hr();
doc.fontSize(11).font('Helvetica-Bold').fillColor('#111').text('Bottom line: ', { continued: true });
doc.font('Helvetica').text('Boardy is a door-opener, not a deal-closer. Your job on this call is to get into their system with a strong profile so they match you with the right investors. Be clear, be specific, be memorable.');

doc.end();
console.log('PDF created successfully');
