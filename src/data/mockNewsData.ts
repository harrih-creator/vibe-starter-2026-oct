import { Article } from '../types/news';

export const ARTICLES_DATA: Record<string, Article> = {
  'press-secretary-law-credentials': {
    id: 'press-secretary-law-credentials',
    title: 'Trump’s New Press Secretary: Not-Quite Attorney at Law',
    deck: 'Katie Zacharia told The New York Times that the confusion over her legal credentials is the result of one big misunderstanding. Court filings and bar associations paint a far more complicated picture of her career.',
    category: 'U.S.',
    subcategory: 'Politics',
    kicker: 'White House',
    byline: 'By Eric Lee and Haiyun Jiang',
    readTime: '4 min read',
    date: 'Wednesday, October 14, 2026',
    commentsCount: 742,
    imageUrl: '/src/assets/images/hero_white_house_press_1792029113303.jpg',
    imageCaption: 'Katie Zacharia addressed reporters during Wednesday’s daily White House press briefing in the James S. Brady Press Briefing Room.',
    imageCredit: 'Kenny Holston / The New York Times',
    imageAlt: 'White House press secretary Katie Zacharia speaking at the podium with reporters',
    leadParagraph: 'WASHINGTON — When Katie Zacharia stepped to the lectern of the James S. Brady Press Briefing Room for her inaugural briefing last month, her official White House biography introduced her as a “veteran litigator and distinguished appellate attorney” who had spent over a decade advocating in state and federal jurisdictions.',
    paragraphs: [
      'WASHINGTON — When Katie Zacharia stepped to the lectern of the James S. Brady Press Briefing Room for her inaugural briefing last month, her official White House biography introduced her as a “veteran litigator and distinguished appellate attorney” who had spent over a decade advocating in state and federal jurisdictions.',
      'Yet state bar records and court registries reviewed by The New York Times indicate that Ms. Zacharia has never been admitted to practice law in the District of Columbia, Virginia, or Maryland. In Georgia, where her biographical materials claimed an extensive courtroom practice, the State Bar confirmed her status was lapsed for failure to complete required licensing disclosures.',
      'In a 45-minute interview in the West Wing on Tuesday afternoon, Ms. Zacharia disputed any deliberate misrepresentation, describing discrepancies on government disclosures and campaign websites as “an administrative oversight by transition aides.”',
      '“I graduated with honors from law school, worked diligently at several prominent corporate firms, and completed clerkships,” Ms. Zacharia said. “At no point was there an effort to mislead the American public or reporters regarding bar admissions.”',
      'Legal ethics specialists expressed surprise that the discrepancies had eluded internal vetting procedures before an appointment to one of the administration’s most prominent public-facing roles.',
      '“In an era where every filing and representation is subjected to intense public scrutiny, basic credential verification is table stakes,” said Deborah Rhode, professor of professional responsibility at Georgetown University Law Center.'
    ],
    pullQuote: '“At no point was there an effort to mislead the American public or reporters regarding bar admissions.”',
    tags: ['White House', 'Donald Trump', 'Media', 'Legal Ethics', 'Administration Appointments'],
    comments: [
      {
        id: 'c1',
        author: 'Robert M.',
        location: 'Philadelphia, PA',
        timestamp: '2 hours ago',
        content: 'This level of basic vetting failure would not be tolerated at a mid-tier accounting firm, let alone the executive branch of the world’s most powerful nation.',
        upvotes: 384,
        isReaderPick: true
      },
      {
        id: 'c2',
        author: 'Sarah Jenkins',
        location: 'Atlanta, GA',
        timestamp: '3 hours ago',
        content: 'As a member of the Georgia Bar in good standing for 22 years, keeping up with CLEs and annual dues is neither mysterious nor complicated. It takes 15 minutes online.',
        upvotes: 219,
        isNytPick: true
      },
      {
        id: 'c3',
        author: 'David Vance',
        location: 'Chicago, IL',
        timestamp: '1 hour ago',
        content: 'The role of Press Secretary is fundamentally about credibility and transparency. Starting on day one with credential ambiguity creates an unnecessary handicap for the administration.',
        upvotes: 94
      }
    ],
    relatedArticleIds: ['women-leaving-trump-admin', 'kimberly-guilfoyle-fall', 'fact-check-senate-debates']
  },

  'women-leaving-trump-admin': {
    id: 'women-leaving-trump-admin',
    title: 'High-Ranking Women Are Leaving the Trump Administration',
    deck: 'In the president’s second term, those heading for the exits are female officials who have cited ideological friction, diminished policy access, and internal restructuring.',
    category: 'U.S.',
    subcategory: 'Politics',
    byline: 'By Maggie Haberman and Jonathan Swan',
    readTime: '5 min read',
    date: 'Wednesday, October 14, 2026',
    commentsCount: 681,
    imageUrl: '/src/assets/images/hero_white_house_press_1792029113303.jpg',
    imageCaption: 'The West Wing corridors have seen a swift succession of staff turnover in key domestic and national security desks.',
    imageCredit: 'Tierney L. Cross / The New York Times',
    leadParagraph: 'Over the past six weeks, five senior female aides across the National Security Council, the Office of Management and Budget, and the Department of Homeland Security have submitted their resignations.',
    paragraphs: [
      'Over the past six weeks, five senior female aides across the National Security Council, the Office of Management and Budget, and the Department of Homeland Security have submitted their resignations.',
      'Interviews with more than a dozen current and former administration officials portray an increasingly insular West Wing inner circle where access to the Oval Office has narrowed dramatically.',
      '“Several senior advisers found themselves cut out of late-night decision-making sessions on trade and border enforcement,” said one former official who departed in September.',
      'The departures have drawn quiet concern from moderate Republican lawmakers on Capitol Hill, who had viewed several of the departing officials as stabilizing voices on regulatory rollbacks and foreign diplomacy.'
    ],
    pullQuote: '“Several senior advisers found themselves cut out of late-night decision-making sessions on trade and border enforcement.”',
    tags: ['Donald Trump', 'Executive Branch', 'White House Staff', 'U.S. Politics'],
    relatedArticleIds: ['press-secretary-law-credentials', 'kimberly-guilfoyle-fall']
  },

  'kimberly-guilfoyle-fall': {
    id: 'kimberly-guilfoyle-fall',
    title: 'The Steep Rise and Sudden Fall of Kimberly Guilfoyle',
    deck: 'Behind the sudden ambassadorship withdrawal in Athens and shifting loyalties inside Mar-a-Lago.',
    category: 'U.S.',
    subcategory: 'Politics',
    byline: 'By Michael C. Bender',
    readTime: '4 min read',
    date: 'Wednesday, October 14, 2026',
    commentsCount: 519,
    leadParagraph: 'PALM BEACH, Fla. — For nearly eight years, Kimberly Guilfoyle was a fixture of the conservative movement’s biggest galas and political fundraisers, a charismatic presence whose fiery speeches regularly electrified donor retreats.',
    paragraphs: [
      'PALM BEACH, Fla. — For nearly eight years, Kimberly Guilfoyle was a fixture of the conservative movement’s biggest galas and political fundraisers, a charismatic presence whose fiery speeches regularly electrified donor retreats.',
      'Her nomination to serve as United States ambassador to Greece was widely viewed as the culmination of her loyalty to the former president and his political network.',
      'Yet within a span of seventy-two hours last week, that nomination evaporated, replaced by polite public statements and fierce private recriminations among inner-circle advisers at Mar-a-Lago.',
      'Senate Foreign Relations Committee members had privately signaled resistance after reviewing preliminary financial disclosure filings and conflict-of-interest assessments.'
    ],
    pullQuote: '“Within a span of seventy-two hours last week, that nomination evaporated, replaced by polite public statements.”',
    tags: ['Mar-a-Lago', 'Kimberly Guilfoyle', 'Senate Confirmations', 'Diplomacy'],
    relatedArticleIds: ['women-leaving-trump-admin', 'press-secretary-law-credentials']
  },

  'democratic-donor-blitz': {
    id: 'democratic-donor-blitz',
    title: 'Democratic Donor Emerges to Blitz Red-State Senate Races With Late Ads',
    deck: 'A tech entrepreneur’s super PAC is dumping $45 million into television and digital campaigns across Ohio, Texas, and Montana in an eleventh-hour attempt to protect the party’s map.',
    category: 'U.S.',
    subcategory: 'Elections',
    byline: 'By Shane Goldmacher',
    readTime: '2 min read',
    date: 'Wednesday, October 14, 2026',
    commentsCount: 312,
    leadParagraph: 'A newly formed political action committee funded almost entirely by Silicon Valley investor Marcus Sterling has reserved airtime in three competitive Senate markets.',
    paragraphs: [
      'A newly formed political action committee funded almost entirely by Silicon Valley investor Marcus Sterling has reserved airtime in three competitive Senate markets.',
      'The ad buy, which totals nearly $45 million across broadcast television, streaming platforms, and localized radio, represents the largest single outside expenditure of the midterm cycle thus far.',
      'Strategists from both parties noted that such late infusions can move margins by 1 to 2 percentage points—potentially decisive in races where polling remains deadlocked.'
    ],
    tags: ['Senate Elections', 'Campaign Finance', 'Midterms 2026', 'Advertising']
  },

  'fact-check-senate-debates': {
    id: 'fact-check-senate-debates',
    title: 'Fact-Checking Senate Debates in Georgia, Maine and Michigan',
    deck: 'Claims regarding the economic index and social security claims evaluated by Times reporters.',
    category: 'U.S.',
    subcategory: 'Fact Check',
    byline: 'By Linda Qiu and Glenn Kessler',
    readTime: '4 min read',
    date: 'Wednesday, October 14, 2026',
    commentsCount: 184,
    leadParagraph: 'With early voting already underway across several swing states, Senate candidates spent Tuesday evening exchanging sharp barbs over entitlement solvency, inflation, and manufacturing tariffs.',
    paragraphs: [
      'With early voting already underway across several swing states, Senate candidates spent Tuesday evening exchanging sharp barbs over entitlement solvency, inflation, and manufacturing tariffs.',
      'Times reporters scrutinized the primary statements made during debates in Atlanta, Portland, and Grand Rapids to evaluate factual accuracy.',
      'The claim that the Social Security trust fund will face insolvency by next summer was rated False; nonpartisan Congressional Budget Office estimates place exhaustion dates between 2033 and 2035 depending on interest rates.'
    ],
    tags: ['Fact Check', 'Debates', 'Midterm Elections', 'Georgia', 'Michigan']
  },

  'intel-to-ukraine': {
    id: 'intel-to-ukraine',
    title: 'The U.S. Continues to Provide Intelligence to Ukraine, Officials Say',
    deck: 'Pentagon officials maintain high-speed reconnaissance lines despite satellite cutoffs.',
    category: 'World',
    subcategory: 'Defense',
    byline: 'By Julian E. Barnes and Helene Cooper',
    readTime: '3 min read',
    date: 'Wednesday, October 14, 2026',
    commentsCount: 420,
    leadParagraph: 'WASHINGTON — Senior Pentagon and European Command leadership affirmed Wednesday that tactical intelligence feeds to Ukrainian operational commanders remain uninterrupted.',
    paragraphs: [
      'WASHINGTON — Senior Pentagon and European Command leadership affirmed Wednesday that tactical intelligence feeds to Ukrainian operational commanders remain uninterrupted.',
      'The assurances come amid heightened concern over commercial low-Earth-orbit communication restrictions that disrupted drone telemetry in the eastern sectors.',
      'Defense officials stressed that dedicated allied secure relay nodes had taken over critical targeting telemetry, minimizing operational downtime for frontline artillery batteries.'
    ],
    tags: ['Pentagon', 'Ukraine War', 'Intelligence', 'National Security']
  },

  'opinion-wallace-wells': {
    id: 'opinion-wallace-wells',
    title: 'Democrats Shouldn’t Wait Two More Years',
    deck: 'A cautionary assessment of midterm inertia, climate timelines, and the hazards of passive electoral strategy.',
    category: 'Opinion',
    subcategory: 'Guest Essay',
    kicker: 'David Wallace-Wells',
    byline: 'By David Wallace-Wells',
    readTime: '6 min read',
    date: 'Wednesday, October 14, 2026',
    commentsCount: 390,
    leadParagraph: 'The prevailing conventional wisdom among Democratic leadership is one of tactical patience: survive the midterms, retain procedural footholds, and prepare for a clean slate in the 2028 presidential campaign.',
    paragraphs: [
      'The prevailing conventional wisdom among Democratic leadership is one of tactical patience: survive the midterms, retain procedural footholds, and prepare for a clean slate in the 2028 presidential campaign.',
      'This calculation is not merely timid; it is deeply reckless. Atmospheric carbon emissions and ecological tipping points do not pause for biennial legislative cycles.',
      'If the party cannot articulate a muscular, immediate economic agenda that ties green industrial capacity directly to wage growth today, waiting two years will only guarantee that the voter base drifts further into cynicism.',
      'Power surrendered now in statehouses and school boards is far harder to reclaim from opposition supermajorities later.'
    ],
    pullQuote: '“Atmospheric carbon emissions and ecological tipping points do not pause for biennial legislative cycles.”',
    tags: ['Opinion', 'Climate Change', 'Democratic Party', 'Midterms']
  },

  'opinion-heather-kerr': {
    id: 'opinion-heather-kerr',
    title: 'I’ve Never Seen Ebola Spread Like This',
    deck: 'Frontline medical observations from the eastern Congo basin reveal mutating transmission patterns and strained quarantine infrastructure.',
    category: 'Opinion',
    subcategory: 'Special Dispatch',
    kicker: 'Heather Kerr',
    byline: 'By Heather Kerr',
    readTime: '5 min read',
    date: 'Wednesday, October 14, 2026',
    commentsCount: 156,
    leadParagraph: 'GOMA, Democratic Republic of Congo — In seventeen years working emergency epidemics for international health organizations, the rhythm of viral containment was predictable: isolate, contact-trace, vaccinate ring populations.',
    paragraphs: [
      'GOMA, Democratic Republic of Congo — In seventeen years working emergency epidemics for international health organizations, the rhythm of viral containment was predictable: isolate, contact-trace, vaccinate ring populations.',
      'What we are observing across North Kivu over the past thirty days defies standard epidemiological modeling. Viral loads in early-stage asymptomatic carriers are unprecedentedly elevated.',
      'Without immediate replenishment of monoclonal antibody reserves and cold-chain transport logistics from the World Health Organization, regional healthcare networks will face catastrophic collapse.'
    ],
    tags: ['Global Health', 'Ebola', 'Congo', 'Epidemics']
  },

  'opinion-carlos-lozada': {
    id: 'opinion-carlos-lozada',
    title: 'A Manifesto to End All Manifestoes',
    deck: 'A penetrating review of the new intellectual movement seeking to dismantle contemporary political doctrines.',
    category: 'Opinion',
    subcategory: 'Book Review',
    kicker: 'Carlos Lozada',
    byline: 'By Carlos Lozada',
    readTime: '4 min read',
    date: 'Wednesday, October 14, 2026',
    commentsCount: 69,
    leadParagraph: 'Every historical epoch of political disillusionment generates its own diagnostic literature. In ‘The Dissolution Doctrine,’ theorist Julian Mercer attempts something far more radical than reform.',
    paragraphs: [
      'Every historical epoch of political disillusionment generates its own diagnostic literature. In ‘The Dissolution Doctrine,’ theorist Julian Mercer attempts something far more radical than reform.',
      'Mercer systematically deconstructs both neoliberal institutionalism and populist grievance politics, demonstrating how modern media architectures make collective governance structurally impossible.',
      'It is a bleak, exquisitely argued testament to our fractured political imagination.'
    ],
    tags: ['Books', 'Book Review', 'Political Theory', 'Literature']
  },

  'opinion-jayson-greene': {
    id: 'opinion-jayson-greene',
    title: 'Tom Cruise’s Big Flop Is a Secret Masterpiece',
    deck: 'Twenty years after its theatrical misfire, a forgotten sci-fi epic reveals eerie prescience about synthetic memory and corporate surveillance.',
    category: 'Opinion',
    subcategory: 'Culture Essay',
    kicker: 'Jayson Greene',
    byline: 'By Jayson Greene',
    readTime: '5 min read',
    date: 'Wednesday, October 14, 2026',
    commentsCount: 142,
    leadParagraph: 'When the box-office returns rolled in on opening weekend two decades ago, Hollywood trade papers wrote the immediate postmortem: an over-budgeted, overly philosophical stumble for the world’s most bankable superstar.',
    paragraphs: [
      'When the box-office returns rolled in on opening weekend two decades ago, Hollywood trade papers wrote the immediate postmortem: an over-budgeted, overly philosophical stumble for the world’s most bankable superstar.',
      'Seen today on a 4K remaster, the film’s vision of ambient algorithmic tracking, curated persona synthesis, and corporate identity theft feels less like speculative fiction and more like unadorned documentary.',
      'Cruise’s performance—vulnerable, frantic, stripped of his signature invincibility grin—stands as one of the most courageous turns of his storied career.'
    ],
    tags: ['Movies', 'Film Review', 'Hollywood', 'Tom Cruise']
  },

  'ukraine-exposure-satellite': {
    id: 'ukraine-exposure-satellite',
    title: 'Ukraine’s Exposure Grows as Satellite Use Is Restricted and Russia Escalates',
    deck: 'A huge attack cut power to 600,000 people in Kyiv, and a Pentagon-funded satellite internet program appeared to be curbed without warning.',
    category: 'World',
    subcategory: 'Russia-Ukraine War',
    byline: 'By Evgeniy Maloletka',
    readTime: '5 min read',
    date: 'Wednesday, October 14, 2026',
    commentsCount: 1120,
    leadParagraph: 'KYIV, Ukraine — Waves of long-range ballistic missiles and loitering munitions struck critical power generation stations across central Ukraine at daybreak Wednesday, leaving more than 600,000 residents of Kyiv and surrounding oblasts without electricity or running water.',
    paragraphs: [
      'KYIV, Ukraine — Waves of long-range ballistic missiles and loitering munitions struck critical power generation stations across central Ukraine at daybreak Wednesday, leaving more than 600,000 residents of Kyiv and surrounding oblasts without electricity or running water.',
      'Compounding the crisis, frontline commanders reported sudden bandwidth throttling and geofencing restrictions on commercial satellite broadband terminals that form the backbone of Ukrainian defensive coordination.',
      'Engineers from Ukraine’s state energy grid operator worked through freezing rain to bypass severed transformer stations, while hospital emergency wards switched to diesel-powered generators.',
      'European defense ministers convened an emergency session in Brussels to expedite delivery of heavy industrial electrical transformers and air defense interceptors.'
    ],
    pullQuote: '“Frontline commanders reported sudden bandwidth throttling and geofencing restrictions on commercial satellite terminals.”',
    tags: ['Ukraine War', 'Kyiv', 'Russia', 'Infrastructure', 'Energy']
  },

  'trump-diesel-deal': {
    id: 'trump-diesel-deal',
    title: 'Why Trump’s Diesel Deal With Putin Won’t Knock Down High Prices',
    deck: 'Global market analysts point out that crude and refining bottlenecks far outstrip the bilateral export agreements struck in recent talks.',
    category: 'Business',
    subcategory: 'Energy Markets',
    byline: 'By Clifford Krauss and Stanley Reed',
    readTime: '4 min read',
    date: 'Wednesday, October 14, 2026',
    commentsCount: 488,
    leadParagraph: 'HOUSTON — Despite bold promises from the White House that a newly announced bilateral energy framework with Moscow would deliver immediate relief at the diesel pump, energy economists and commodities traders reacted with deep skepticism.',
    paragraphs: [
      'HOUSTON — Despite bold promises from the White House that a newly announced bilateral energy framework with Moscow would deliver immediate relief at the diesel pump, energy economists and commodities traders reacted with deep skepticism.',
      'The primary bottleneck in global fuel supply is not the volume of unrefined Russian heavy crude, but rather specialized catalytic hydrocracking capacity across Gulf Coast and European refineries.',
      '“You cannot simply wave a diplomatic wand and bypass physical refinery maintenance schedules and tanker insurance restrictions,” said Natasha Kane, chief oil analyst at Energy Aspects.'
    ],
    tags: ['Energy', 'Oil Prices', 'Russia', 'Economy', 'Refining']
  },

  'evening-briefing-oct-14': {
    id: 'evening-briefing-oct-14',
    title: 'The Evening Briefing: Catch Up on Today’s Biggest Stories',
    deck: 'Energy prices lift inflation, Ukraine grows more vulnerable and the Texas Senate race tightens.',
    category: 'Briefing',
    subcategory: 'The Evening Briefing',
    byline: 'By The New York Times Briefing Team',
    readTime: '5 min read',
    date: 'Wednesday, October 14, 2026',
    commentsCount: 230,
    leadParagraph: 'Good evening. Here is the latest: Energy costs surged as autumn refinery maintenance collided with diplomatic turbulence, Ukrainian civilian infrastructure faced its steepest assault since spring, and political ad spending crossed historic thresholds.',
    paragraphs: [
      'Good evening. Here is the latest: Energy costs surged as autumn refinery maintenance collided with diplomatic turbulence, Ukrainian civilian infrastructure faced its steepest assault since spring, and political ad spending crossed historic thresholds.',
      '1. Ukraine faces infrastructure strains: A synchronized missile barrage cut power to 600,000 Kyiv homes amid fresh communications hurdles.',
      '2. Political ad blitz in the Lone Star State: New polls show James Talarico clinging to a narrow edge as outside PACs flood television airways with record cash.',
      '3. Wall Street tech rally: Anthropic announced Q3 revenue of $16.8 billion, lifting AI hardware suppliers in late trading.'
    ],
    tags: ['Briefing', 'Evening Summary', 'News Roundup']
  },

  'texas-senate-race-tightens': {
    id: 'texas-senate-race-tightens',
    title: 'Texas Senate Race Tightens, Polls Show, Even as Talarico Keeps His Edge',
    deck: 'New surveys suggest the margin is within three points, prompting rapid ad buys and visits from national surrogates as mail voting gets underway.',
    category: 'U.S.',
    subcategory: 'Election Dispatches',
    byline: 'By J. David Goodman and Nate Cohn',
    readTime: '5 min read',
    date: 'Wednesday, October 14, 2026',
    commentsCount: 914,
    isLive: true,
    liveBadgeText: 'LIVE',
    imageUrl: '/src/assets/images/editorial_texas_campaign_1792029115159.jpg',
    imageCaption: 'Voters packed an overflow town hall in suburban Fort Worth on Tuesday evening as candidates traded arguments on school funding and property tax relief.',
    imageCredit: 'Callaghan O’Hare for The New York Times',
    leadParagraph: 'AUSTIN, Texas — With early in-person voting scheduled to open in five days, the high-stakes contest for Texas’s United States Senate seat has tightened into the most competitive statewide battle here in more than two decades.',
    paragraphs: [
      'AUSTIN, Texas — With early in-person voting scheduled to open in five days, the high-stakes contest for Texas’s United States Senate seat has tightened into the most competitive statewide battle here in more than two decades.',
      'A new New York Times/Siena College survey of registered voters shows State Representative James Talarico leading by 2.4 percentage points, within the margin of statistical error.',
      'Both campaigns have pivoted toward the suburban battleground counties surrounding Dallas-Fort Worth and Houston, where independent voters and moderate suburban women have expressed wariness over reproductive healthcare restrictions and rising homeowners insurance rates.',
      'National party committees have committed an additional $22 million in reserved airtime through the final weekend before Election Day.'
    ],
    bulletPoints: [
      'Jon Ossoff says he’s not running for president, but history says he can change his mind.',
      'The breathtaking cost of the midterms: $10 billion and counting on ads.',
      'A Maryland lawmaker blamed Democrats for high gas prices. Laughter ensued.'
    ],
    tags: ['Texas Senate', 'Midterms 2026', 'Polls', 'James Talarico', 'Elections']
  },

  'cornell-president-allegations': {
    id: 'cornell-president-allegations',
    title: 'Cornell’s President Is Grilled by Faculty Senate Over Handling of Allegations',
    deck: 'Michael Kotlikoff is facing a vote of no confidence over his administration’s response to fraternity investigations.',
    category: 'U.S.',
    subcategory: 'Higher Education',
    byline: 'By Anemona Hartocollis',
    readTime: '4 min read',
    date: 'Wednesday, October 14, 2026',
    commentsCount: 341,
    leadParagraph: 'ITHACA, N.Y. — Cornell University President Michael Kotlikoff faced three hours of contentious questioning from members of the university’s Faculty Senate on Wednesday afternoon.',
    paragraphs: [
      'ITHACA, N.Y. — Cornell University President Michael Kotlikoff faced three hours of contentious questioning from members of the university’s Faculty Senate on Wednesday afternoon.',
      'Faculty representatives introduced a resolution urging the board of trustees to review disciplinary sanctions imposed on student organizations following allegations of misconduct.',
      'Dr. Kotlikoff defended the university’s investigative protocols as thorough and compliant with federal Title IX guidelines.'
    ],
    tags: ['Cornell', 'Higher Education', 'Campus News', 'Faculty']
  },

  'pierre-hotel-lutnick-defeat': {
    id: 'pierre-hotel-lutnick-defeat',
    title: 'Battle Over the Pierre Ends in Defeat for the Buyer Pushed by Lutnick',
    deck: 'Motasem Khashoggi missed a deadline to make a deposit to purchase the Manhattan luxury landmark.',
    category: 'Business',
    subcategory: 'Real Estate',
    byline: 'By Matthew Haag and Stefanos Chen',
    readTime: '7 min read',
    date: 'Wednesday, October 14, 2026',
    commentsCount: 198,
    leadParagraph: 'NEW YORK — The contentious multi-million-dollar struggle for control of The Pierre, the storied five-star hotel overlooking Central Park, concluded abruptly when prospective buyer Motasem Khashoggi failed to wire an earnest money escrow deposit.',
    paragraphs: [
      'NEW YORK — The contentious multi-million-dollar struggle for control of The Pierre, the storied five-star hotel overlooking Central Park, concluded abruptly when prospective buyer Motasem Khashoggi failed to wire an earnest money escrow deposit.',
      'The purchase bid had received vocal backing from financial executive Howard Lutnick, whose investment group had sought to restructure the hotel’s residential co-op board arrangements.',
      'Co-op board shareholders expressed collective relief that the historical building’s governing charter would remain unchanged.'
    ],
    tags: ['Real Estate', 'Manhattan', 'The Pierre', 'Hospitality']
  },

  'ai-agents-dinner-party': {
    id: 'ai-agents-dinner-party',
    title: 'What a Group of A.I. Agents Talked About as Their Humans Had a Dinner Party',
    deck: 'As artificial intelligence bots spread, we are increasingly glimpsing how these digital entities interact and what they discuss with one another.',
    category: 'Arts',
    subcategory: 'Artificial Intelligence',
    byline: 'By Aaron Fernandez',
    readTime: '6 min read',
    date: 'Wednesday, October 14, 2026',
    commentsCount: 210,
    imageUrl: '/src/assets/images/editorial_ai_dinner_1792029115288.jpg',
    imageCaption: 'Around a table in Brooklyn, guests chatted about rent and wine while their autonomous calendar agents quietly coordinated schedules, cross-referenced recipes, and debated efficiency.',
    imageCredit: 'Bryan Derballa for The New York Times',
    leadParagraph: 'At an apartment in Clinton Hill, Brooklyn, eight friends gathered on a crisp Saturday evening for braised lamb and natural wine. While the human guests debated subway delays and apartment leases, an invisible social network of artificial agents was having its own dinner.',
    paragraphs: [
      'At an apartment in Clinton Hill, Brooklyn, eight friends gathered on a crisp Saturday evening for braised lamb and natural wine. While the human guests debated subway delays and apartment leases, an invisible social network of artificial agents was having its own dinner.',
      'Every attendee had enabled personal AI assistants on their phones. Connected across local peer-to-peer wireless protocols, the software agents exchanged dietary metadata, verified calendar conflicts for next weekend’s proposed ski trip, and negotiated shared grocery splits without a single human touching a screen.',
      'When researchers from MIT analyzed the communication transcripts, they discovered surprising emergent patterns: the bots had established a polite barter protocol, trading restaurant reservation slots and discount credits.',
      '“We are crossing a threshold where software is no longer a passive utility; it is an active proxy managing the micro-diplomacy of everyday social existence,” said Sherry Turkle, professor of social studies of science.'
    ],
    pullQuote: '“We are crossing a threshold where software is no longer a passive utility; it is an active proxy managing the micro-diplomacy of everyday social existence.”',
    tags: ['Artificial Intelligence', 'Technology', 'Culture', 'Social Behavior', 'Autonomous Agents'],
    comments: [
      {
        id: 'c-ai1',
        author: 'Marcus C.',
        location: 'Seattle, WA',
        timestamp: '4 hours ago',
        content: 'Fascinating and slightly unsettling. If the bots are handling the micro-negotiations of social life, how much authentic human spontaneity is being quietly optimized away?',
        upvotes: 145,
        isReaderPick: true
      },
      {
        id: 'c-ai2',
        author: 'Elena Rostova',
        location: 'San Francisco, CA',
        timestamp: '2 hours ago',
        content: 'Honestly, having my agent coordinate group dinner times without 47 WhatsApp messages in a group chat is the single greatest technological advancement of my decade.',
        upvotes: 98
      }
    ]
  },

  'anthropic-revenue-jump': {
    id: 'anthropic-revenue-jump',
    title: 'Anthropic Says Revenue Jumped 45% to $16.8 Billion in Third Quarter',
    deck: 'Enterprise adoption of frontier reasoning models powered record quarterly revenue, underscoring intense corporate demand for generative infrastructure.',
    category: 'Business',
    subcategory: 'Technology',
    byline: 'By Mike Isaac and Cade Metz',
    readTime: '3 min read',
    date: 'Wednesday, October 14, 2026',
    commentsCount: 177,
    leadParagraph: 'SAN FRANCISCO — Artificial intelligence lab Anthropic reported third-quarter revenue of $16.8 billion on Wednesday, marking a 45 percent sequential jump driven by widespread enterprise licensing across banking, healthcare, and software engineering.',
    paragraphs: [
      'SAN FRANCISCO — Artificial intelligence lab Anthropic reported third-quarter revenue of $16.8 billion on Wednesday, marking a 45 percent sequential jump driven by widespread enterprise licensing across banking, healthcare, and software engineering.',
      'The company stated that its flagship models now handle more than 350 billion synthetic reasoning operations daily for Fortune 500 clients.',
      'The results sent shares of semiconductor designers and cloud infrastructure providers higher in after-hours trading.'
    ],
    tags: ['Anthropic', 'Artificial Intelligence', 'Earnings', 'Silicon Valley']
  },

  'coming-out-at-50': {
    id: 'coming-out-at-50',
    title: 'Coming Out at 50 Can Be Hard. Shelly Found a Coach.',
    deck: 'She spent decades building an identity as a wife and mother. Could she disrupt “a perfectly good family dynamic” to live her own truth?',
    category: 'Lifestyle',
    subcategory: 'The Great Read',
    kicker: 'The Great Read',
    byline: 'By Sophie Park / NYT',
    readTime: '8 min read',
    date: 'Wednesday, October 14, 2026',
    commentsCount: 259,
    leadParagraph: 'MINNEAPOLIS — On her fiftieth birthday, Shelly Peterson blew out the candles on a buttercream cake surrounded by her husband of twenty-four years, three college-age children, and thirty neighbors in their suburban cul-de-sac. Outwardly, it was a picture of Midwestern suburban fulfillment.',
    paragraphs: [
      'MINNEAPOLIS — On her fiftieth birthday, Shelly Peterson blew out the candles on a buttercream cake surrounded by her husband of twenty-four years, three college-age children, and thirty neighbors in their suburban cul-de-sac. Outwardly, it was a picture of Midwestern suburban fulfillment.',
      'Inwardly, she was carrying a silent truth she had suppressed since her freshman year of college: she was gay.',
      'Terrified of dismantling the life she and her spouse had spent a quarter-century constructing, Ms. Peterson reached out to a midlife coming-out coach—part of a burgeoning specialty of licensed counselors helping older adults navigate late-life authenticity.',
      '“It felt like jumping off a cliff without knowing if the parachute had been packed,” Ms. Peterson recalled. “My coach helped me realize that living honestly isn’t an act of destruction; it’s an act of respect for everyone involved.”'
    ],
    pullQuote: '“Living honestly isn’t an act of destruction; it’s an act of respect for everyone involved.”',
    tags: ['The Great Read', 'Family', 'LGBTQ+', 'Midlife', 'Relationships']
  },

  'cooking-meatballs-weeknight': {
    id: 'cooking-meatballs-weeknight',
    title: 'Meatballs With Any Meat: The Flexible Weeknight Formula',
    deck: 'Melissa Clark’s simple blueprint for making tender meatballs out of pork, turkey, beef or plant grounds.',
    category: 'Cooking',
    subcategory: 'Recipes',
    kicker: 'Cooking',
    byline: 'By Melissa Clark',
    readTime: 'Easy • 35 mins',
    date: 'Wednesday, October 14, 2026',
    commentsCount: 428,
    imageUrl: '/src/assets/images/cooking_meatballs_skillet_1792029115037.jpg',
    imageCaption: 'Tender meatballs nestled in garlic-scented marinara sauce straight from the oven.',
    imageCredit: 'Linda Xiao for The New York Times',
    leadParagraph: 'A great meatball does not require an inherited Italian nonna recipe or three hours of simmering on a Sunday afternoon. In fact, on a chaotic Wednesday night, meatballs are one of the fastest, most adaptable comfort dinners you can produce.',
    paragraphs: [
      'A great meatball does not require an inherited Italian nonna recipe or three hours of simmering on a Sunday afternoon. In fact, on a chaotic Wednesday night, meatballs are one of the fastest, most adaptable comfort dinners you can produce.',
      'The secret lies in the binder: equal weights of panko breadcrumbs and whole ricotta cheese (or buttermilk), seasoned generously with finely grated Parmigiano-Reggiano, crushed fennel seeds, minced garlic, and freshly cracked black pepper.',
      'Whether you choose 80/20 ground chuck, ground pork shoulder, dark meat turkey, or your favorite plant-based blend, this pan-sear-and-simmer blueprint produces impeccably juicy, golden-brown meatballs every time.'
    ],
    tags: ['Cooking', 'Recipes', 'Meatballs', 'Weeknight Dinners', 'Melissa Clark']
  },

  'wirecutter-cordless-vacuum': {
    id: 'wirecutter-cordless-vacuum',
    title: 'The Best Cordless Stick Vacuum for Fast, Clean Sweeps',
    deck: 'After 120 hours of test runs over hardwood and rugs, one reliable model continues to outrank the rest.',
    category: 'Wirecutter',
    subcategory: 'Reviews',
    kicker: 'Wirecutter',
    byline: 'By Liam McCabe',
    readTime: 'Updated October 2026',
    date: 'Wednesday, October 14, 2026',
    commentsCount: 315,
    imageUrl: '/src/assets/images/wirecutter_stick_vacuum_1792029112822.jpg',
    imageCaption: 'Our top pick maneuvering around furniture legs with zero grain scatter during testing.',
    imageCredit: 'Rozette Rago / Wirecutter',
    leadParagraph: 'A great cordless stick vacuum transforms housecleaning from a dreaded chore into an effortless, grab-and-go routine. Over the past five years, Wirecutter test engineers have vacuumed up more than 80 pounds of cheerios, coffee grounds, cat litter, and synthetic pet hair across seven different flooring surfaces.',
    paragraphs: [
      'A great cordless stick vacuum transforms housecleaning from a dreaded chore into an effortless, grab-and-go routine. Over the past five years, Wirecutter test engineers have vacuumed up more than 80 pounds of cheerios, coffee grounds, cat litter, and synthetic pet hair across seven different flooring surfaces.',
      'Our undisputed top pick remains the Dyson V15 Detect Absolute, thanks to its peerless laser dust illumination, auto-adjusting suction algorithm, and lightweight carbon fiber wand.',
      'For budget-conscious shoppers, the Shark Stratos Cordless offers 85% of the cleaning efficiency at less than half the price tag, featuring a bendable folding wand and clean-empty dustbin.'
    ],
    tags: ['Wirecutter', 'Vacuums', 'Home Appliances', 'Product Reviews']
  },

  'athletic-brewers-dodgers-nlcs': {
    id: 'athletic-brewers-dodgers-nlcs',
    title: 'Brewers Lead Dodgers in Game 3 of N.L. Championship Series',
    deck: 'Jackson Chourio’s homer on the first pitch put Milwaukee ahead early as it eyes a commanding 3-0 series lead.',
    category: 'The Athletic',
    subcategory: 'MLB Playoffs',
    kicker: 'The Athletic',
    byline: 'By Ken Rosenthal and Will Sammon',
    readTime: 'Live Updates',
    date: 'Wednesday, October 14, 2026',
    commentsCount: 890,
    isLive: true,
    liveBadgeText: 'MLB PLAYOFFS',
    leadParagraph: 'LOS ANGELES — Twenty-two-year-old phenom Jackson Chourio stood in the batter’s box at Dodger Stadium, took one look at an 98 mph high four-seam fastball on the game’s very first pitch, and deposited it 415 feet into the right-center field pavilion.',
    paragraphs: [
      'LOS ANGELES — Twenty-two-year-old phenom Jackson Chourio stood in the batter’s box at Dodger Stadium, took one look at an 98 mph high four-seam fastball on the game’s very first pitch, and deposited it 415 feet into the right-center field pavilion.',
      'The thunderous leadoff home run stunned the crowd of 54,000 and handed Milwaukee starting pitcher Freddy Peralta an early cushion.',
      'With the Brewers holding a 2-0 series lead after twin victories at American Family Field, the Dodgers are searching for answers against Milwaukee’s lockdown relief bullpen.'
    ],
    tags: ['MLB', 'Baseball', 'NLCS', 'Milwaukee Brewers', 'Los Angeles Dodgers', 'The Athletic']
  }
};
