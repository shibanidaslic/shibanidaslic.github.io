/* ============================================================
   Shibani Das — LIC Agent | language switching (EN / বাংলা)
   Pure vanilla JS. Falls back to English for anything missing.
   ============================================================ */

(function () {
  "use strict";

  var norm = function (s) {
    return String(s).replace(/\s+/g, " ").trim();
  };

  /* ---------- plain text: English (normalized) -> Bengali ---------- */
  var BN = {
    "🪪 LIC Agent · Code 02423/46K": "🪪 LIC এজেন্ট · কোড 02423/46K",
    "🏛️ Backed by LIC — owned by the Government of India": "🏛️ LIC-এর পৃষ্ঠপোষকতায় — ভারত সরকারের মালিকানাধীন",
    Services: "পরিষেবা",
    "Why me": "কেন আমি",
    About: "আমার সম্পর্কে",
    Plans: "পলিসি-প্ল্যান",
    FAQ: "প্রশ্নোত্তর",
    Contact: "যোগাযোগ",
    "Life Insurance Corporation of India": "ভারতীয় জীবন বীমা নিগম",
    "Owned by the Government of India · Since 1956": "ভারত সরকারের মালিকানাধীন · ১৯৫৬ সাল থেকে",
    "LIC Agent · Life Insurance Advisor": "LIC এজেন্ট · জীবন বীমা উপদেষ্টা",
    "Free consultation": "বিনামূল্যে পরামর্শ",
    "Doorstep help": "বাড়িতে এসে সাহায্য",
    "📞 Call 9232162949": "📞 কল করুন 9232162949",
    "💬 Chat on WhatsApp": "💬 হোয়াটসঅ্যাপে চ্যাট করুন",
    "📤 Send to a relative": "📤 আত্মীয়কে পাঠান",
    "🛡️ LIC is India's largest insurer and is owned by the Government of India.":
      "🛡️ LIC ভারতের বৃহত্তম বীমা সংস্থা এবং ভারত সরকারের মালিকানাধীন।",
    "🛡️ LIC Agent": "🛡️ LIC এজেন্ট",
    "Agent Code": "এজেন্ট কোড",
    "📍 Amarargarh, P.O. Amarargarh · PIN 713144": "📍 অমরারগড়, ডাকঘর অমরারগড় · PIN 713144",
    "🤝 Guided by Super Agent / CLIA Dipak Bhakat": "🤝 সুপার এজেন্ট / CLIA দীপক ভকত-এর তত্ত্বাবধানে",
    "Request a free call back": "বিনামূল্যে কলব্যাকের অনুরোধ করুন",
    "Backed by LIC": "LIC-এর পৃষ্ঠপোষকতায়",
    "Owned by the Government of India": "ভারত সরকারের মালিকানাধীন",
    "Registered LIC Agent": "নিবন্ধিত LIC এজেন্ট",
    "Agent code 02423/46K": "এজেন্ট কোড 02423/46K",
    "No cost to you": "আপনার কোনো খরচ নেই",
    "Advice & help are free": "পরামর্শ ও সাহায্য সম্পূর্ণ বিনামূল্যে",
    "Local & personal": "স্থানীয় ও ব্যক্তিগত",
    "Amarargarh & nearby villages": "অমরারগড় ও আশপাশের গ্রাম",
    "An undertaking owned by the Government of India — serving the nation since 1956, and India's largest life insurance company.":
      "ভারত সরকারের মালিকানাধীন একটি প্রতিষ্ঠান — ১৯৫৬ সাল থেকে দেশের সেবায় নিয়োজিত এবং ভারতের বৃহত্তম জীবন বীমা সংস্থা।",
    "🏛️ Government of India undertaking": "🏛️ ভারত সরকারের অধীনস্থ প্রতিষ্ঠান",
    "Established in India": "ভারতে প্রতিষ্ঠিত",
    "Owns & controls LIC": "LIC-এর মালিক ও নিয়ন্ত্রক",
    "India's largest life insurer": "ভারতের বৃহত্তম জীবন বীমা সংস্থা",
    "of policyholders": "পলিসি-ধারক কোটিতে",
    "Everything you need, in one place": "যা যা দরকার, সব এক জায়গায়",
    "Whether you are starting a new policy or need help with an old one, you can come to me for all of it.":
      "নতুন পলিসি নেওয়া হোক বা পুরনো পলিসির সাহায্য হোক — সব বিষয়ে আমার কাছে আসতে পারেন।",
    "Life Insurance Policy Guidance": "জীবন বীমা পলিসি পরামর্শ",
    "জীবন বীমা পলিসি পরামর্শ": "Life Insurance Policy Guidance",
    "Understand which plan truly fits your family's needs and budget — in simple language, before you commit a single rupee.":
      "কোন পলিসি আপনার পরিবারের চাহিদা ও বাজেটের সঙ্গে মানানসই — সহজ ভাষায় বুঝুন, এক টাকাও খরচের আগে।",
    "New Policy Assistance": "নতুন পলিসি সহায়তা",
    "নতুন পলিসি সহায়তা": "New Policy Assistance",
    "Full help with choosing, filling and submitting a new LIC policy — correctly, and completely, the first time.":
      "নতুন LIC পলিসি বাছাই, ফর্ম পূরণ ও জমা — প্রথমবারেই সম্পূর্ণ ও সঠিকভাবে করার পূর্ণ সহায়তা।",
    "Premium Payment Guidance": "প্রিমিয়াম জমার সহায়তা",
    "প্রিমিয়াম জমার সহায়তা": "Premium Payment Guidance",
    "Never miss a due date again. I will remind you and help you pay your premium online or offline, easily.":
      "আর কোনো প্রিমিয়ামের দিন মিস করবেন না। আমি মনে করিয়ে দেব এবং অনলাইন বা অফলাইনে প্রিমিয়াম জমাতে সহজে সাহায্য করব।",
    "Policy Servicing": "পলিসি সার্ভিসিং",
    "পলিসি সার্ভিসিং": "Policy Servicing",
    "Nomination changes, address updates, payment mode changes, duplicate policy help and revival of lapsed policies.":
      "মনোনয়ন পরিবর্তন, ঠিকানা হালনাগাদ, পেমেন্ট মোড পরিবর্তন, ডুপ্লিকেট পলিসি এবং ল্যাপসড পলিসি রিভাইভালে সাহায্য।",
    "Claim-Related Assistance": "ক্লেইম সংক্রান্ত সহায়তা",
    "ক্লেইম সংক্রান্ত সহায়তা": "Claim-Related Assistance",
    "Guidance and paperwork support for maturity, survival benefit and death claims — so your family gets what is rightfully theirs.":
      "ম্যাচিওরিটি, সারভাইভাল বেনিফিট ও মৃত্যুক্লেইমে গাইডেন্স ও কাগজপত্রের সহায়তা — যাতে আপনার পরিবার ন্যায্য যা পায়, তা পায়।",
    "Not sure what you need?": "কী দরকার বুঝতে পারছেন না?",
    "Just call. A friendly chat costs nothing — I'll help you understand your options in plain Bengali or English.":
      "শুধু একটা ফোন। বন্ধুত্বপূর্ণ আলাপে কোনো খরচ নেই — বাংলা বা ইংরেজিতে আপনার বিকল্পগুলো বুঝতে সাহায্য করব।",
    "📞 Call now": "📞 এখনই কল করুন",
    "Why families choose me": "পরিবারেরা কেন আমাকে বেছে নেন",
    "Simple, honest help you can trust": "সহজ, সৎ সাহায্য — যার ওপর ভরসা রাখতে পারেন",
    "Insurance is a promise about your family's future. You deserve to understand it clearly, and to be guided by someone who will still be there years later.":
      "বীমা আপনার পরিবারের ভবিষ্যতের প্রতিশ্রুতি। আপনি চান সব পরিষ্কার বুঝতে — এবং এমন কারও পরামর্শ, যিনি বহু বছর পরেও পাশে থাকবেন।",
    "Honest advice, always": "সবসময় সৎ পরামর্শ",
    "If a plan is not right for your family, I will tell you plainly — even if it means recommending a smaller policy.":
      "কোনো পলিসি আপনার পরিবারের জন্য ঠিক না হলে, স্পষ্ট জানিয়ে দেব — তার মানে ছোট পলিসির পরামর্শ দিলেও।",
    "I handle the paperwork": "কাগজপত্রের দায়িত্ব আমার",
    "Forms, documents and follow-ups are my job, not yours. You just need to give me the details and sign where needed.":
      "ফর্ম, কাগজ ও ফলো-আপ আমার কাজ, আপনার নয়। আপনাকে শুধু তথ্য দিতে হবে এবং প্রয়োজনমতো স্বাক্ষর করতে হবে।",
    "I stay after the policy": "পলিসির পরেও আমি আছি",
    "Premium reminders, servicing, corrections and claim support for years to come — not just on the day you buy.":
      "প্রিমিয়াম রিমাইন্ডার, সার্ভিসিং, সংশোধন ও ক্লেইম সহায়তা বছরের পর বছর — শুধু কেনার দিন নয়।",
    "Explained in your language": "আপনার ভাষায় বোঝানো",
    "Everything in simple বাংলা or English, as slowly as you need. No confusing jargon, no pressure to decide on the spot.":
      "সব কিছু সহজ বাংলা বা ইংরেজিতে, যত ধীরে দরকার। জটিল শব্দ নেই, তখনই সিদ্ধান্ত নেওয়ার চাপ নেই।",
    "A familiar face for your family's insurance needs": "আপনার পরিবারের বীমা চাহিদায় এক চেনা মুখ",
    "Insurance should not feel complicated. My job is to make life insurance simple, honest and understandable for the people of Amarargarh and around.":
      "বীমা জটিল মনে হওয়া উচিত নয়। আমার কাজ — অমরারগড় ও আশপাশের মানুষের জন্য জীবন বীমা সহজ, সৎ ও বোধগম্য করা।",
    "Whether you want to protect your family, build a savings habit, plan for your child's future or arrange retirement income — I will help you look at the options calmly and choose what suits your situation and budget.":
      "পরিবারের সুরক্ষা, সঞ্চয়ের অভ্যাস, সন্তানের ভবিষ্যৎ বা অবসরের আয় — যেকোনো প্রয়োজনে, শান্তভাবে বিকল্প দেখে আপনার পরিস্থিতি ও বাজেট অনুযায়ী সিদ্ধান্ত নিতে সাহায্য করব।",
    "I treat every family the way I would want mine to be treated: with patience and honesty. If something is not right for you, I will say so.":
      "প্রতিটি পরিবারের সঙ্গে আমি সেরকমই আচরণ করি, যেভাবে নিজের পরিবারের জন্য চাই: ধৈর্য ও সততার সঙ্গে। কিছু ঠিক না হলে, সেটাই বলে দেব।",
    "🪪 Agent Code 02423/46K": "🪪 এজেন্ট কোড 02423/46K",
    "📄 30+ LIC policies arranged": "📄 ৩০টির বেশি LIC পলিসি সাজানো হয়েছে",
    "🤝 Guided by CLIA Dipak Bhakat": "🤝 CLIA দীপক ভকত-এর তত্ত্বাবধানে",
    "👨‍👩‍👧 50+ families helped": "👨‍👩‍👧 ৫০টির বেশি পরিবারকে সাহায্য",
    "Get in touch": "যোগাযোগ করুন",
    "Scan to WhatsApp": "হোয়াটসঅ্যাপে স্ক্যান করুন",
    "Point your phone camera here to start a chat.": "চ্যাট শুরু করতে আপনার ফোনের ক্যামেরা এখানে ধরুন।",
    "LIC policies arranged": "LIC পলিসি সাজানো হয়েছে",
    "Local families guided": "স্থানীয় পরিবারকে গাইড করা হয়েছে",
    "Serving Amarargarh": "অমরারগড়ে সেবা",
    "Cost of my advice": "আমার পরামর্শের খরচ",
    yrs: "বছর",
    "Plan categories": "পলিসির ধরন",
    "What kind of plans can we look at?": "কোন কোন ধরনের পলিসি দেখা যাবে?",
    "LIC offers solutions for different needs and life stages. Here is a simple overview of the usual categories I can help you explore.":
      "LIC বিভিন্ন প্রয়োজনের জন্য সমাধান দেয়। সাধারণ কিছু পলিসির ধরন এখানে সহজভাবে দেখানো হলো — এগুলো দেখাতে আমি সাহায্য করতে পারি।",
    "Term / Risk Cover": "টার্ম / রিস্ক কভার",
    "Pure protection for your family at a low premium.": "কম প্রিমিয়ামে পরিবারের জন্য বিশুদ্ধ সুরক্ষা।",
    Endowment: "এন্ডোমেন্ট",
    "Savings and life cover together, with a maturity amount.": "সঞ্চয় ও জীবন কভার একসঙ্গে, ম্যাচিওরিটি অ্যামাউন্টসহ।",
    "Money Back": "মানি ব্যাক",
    "Regular payouts during the policy term plus life cover.": "পলিসির মেয়াদকালে নিয়মিত টাকা ফেরত প্লাস জীবন কভার।",
    "Pension & Annuity": "পেনশন ও অ্যানুইটি",
    "Build a steady income for your later years.": "বয়সকালে নিয়মিত আয় গড়ে তুলুন।",
    "Child Plans": "শিশু পলিসি",
    "Save steadily for education, marriage and big milestones.": "শিক্ষা, বিয়ে ও বড় লক্ষ্যের জন্য নিয়মিত সঞ্চয়।",
    "Investment-Linked (ULIP)": "ইনভেস্টমেন্ট-লিংকড (ULIP)",
    "Market-linked saving with life insurance cover.": "জীবন বীমা কভারসহ বাজার-সংশ্লিষ্ট সঞ্চয়।",
    "How it works": "কীভাবে কাজ করে",
    "Simple from start to finish": "শুরু থেকে শেষ পর্যন্ত সহজ",
    "No running around, no confusing forms. Here is what working with me looks like.":
      "ছোটাছুটি নেই, জটিল ফর্ম নেই। আমার সঙ্গে কাজ করা দেখতে কেমন — এখানে তা।",
    "Call or WhatsApp": "কল বা হোয়াটসঅ্যাপ",
    "Tell me your age, family situation and roughly what you want to save or protect.":
      "আপনার বয়স, পারিবারিক অবস্থা আর মোটামুটি কতটা সঞ্চয় বা সুরক্ষা চান — বলুন।",
    "Free discussion": "বিনামূল্যে আলোচনা",
    "We compare suitable LIC plans together and I answer all your questions honestly.":
      "উপযুক্ত LIC পলিসিগুলো একসঙ্গে তুলনা করি এবং আপনার সব প্রশ্নের সৎ উত্তর দিই।",
    "Proposal & documents": "প্রপোজাল ও কাগজপত্র",
    "I help you fill the proposal form and collect the required documents correctly.":
      "প্রপোজাল ফর্ম পূরণ এবং প্রয়োজনীয় কাগজপত্র সঠিকভাবে সংগ্রহে সাহায্য করি।",
    "Policy & lifelong support": "পলিসি ও আজীবন সমর্থন",
    "Premium reminders, servicing and, when the time comes, full claim support.":
      "প্রিমিয়াম রিমাইন্ডার, সার্ভিসিং এবং প্রয়োজনের সময় পূর্ণ ক্লেইম সহায়তা।",
    "Share your experience": "আপনার অভিজ্ঞতা শেয়ার করুন",
    "Has my help made a difference for your family?": "আমার সাহায্যে কি আপনার পরিবারের কিছু বদল এসেছে?",
    "Your honest words can help another family in Amarargarh take the right step for their future. If I have helped you with a policy, a premium or a claim, I would be grateful if you shared a few words.":
      "আপনার সৎ কথা অমরারগড়ের অন্য একটি পরিবারকে তাদের ভবিষ্যতের জন্য সঠিক পদক্ষেপ নিতে সাহায্য করতে পারে। পলিসি, প্রিমিয়াম বা ক্লেইমে সাহায্য করতে পেরে থাকলে, কয়েকটা কথা শেয়ার করলে কৃতজ্ঞ হব।",
    "💬 Share your experience": "💬 আপনার অভিজ্ঞতা শেয়ার করুন",
    "📞 Call instead": "📞 পরিবর্তে কল করুন",
    "Thank you for trusting me with something as important as your family's security. If I have helped you, a few kind words from you would mean a lot — and would help others nearby find the same help.":
      "আপনার পরিবারের সুরক্ষার মতো গুরুত্বপূর্ণ বিষয়ে আমাকে বিশ্বাস করার জন্য ধন্যবাদ। আমার কাজে সাহায্য হয়ে থাকলে, আপনার কয়েকটি ভালো কথা অনেক অর্থবহ — আর আশপাশের মানুষও একই সাহায্য পাবেন।",
    "Every message reaches me personally on WhatsApp. Nothing on this page is a paid or invented review.":
      "প্রতিটি বার্তা হোয়াটসঅ্যাপে সরাসরি আমার কাছে পৌঁছয়। এই পেজে কোনো কেনা বা বানানো রিভিউ নেই।",
    Questions: "প্রশ্ন",
    "Frequently asked questions": "বারবার জিজ্ঞাসিত প্রশ্ন",
    "The things people ask me most often. If your question is not here, just call.":
      "যে প্রশ্নগুলো মানুষ সবচেয়ে বেশি করে। আপনার প্রশ্ন এখানে না থাকলে, শুধু কল করুন।",
    "Do I have to pay for advice or guidance?": "পরামর্শ বা গাইডেন্সের জন্য কি টাকা দিতে হবে?",
    "No. Consultation, plan comparison and policy help are completely free for you. LIC pays the agent's commission, so your guidance costs nothing extra.":
      "না। পরামর্শ, পলিসি তুলনা ও পলিসি সাহায্য আপনার জন্য সম্পূর্ণ বিনামূল্যে। LIC এজেন্টের কমিশন দেয়, তাই আপনার গাইডেন্সে কোনো অতিরিক্ত খরচ নেই।",
    "What documents are needed for a new LIC policy?": "নতুন LIC পলিসির জন্য কী কী কাগজ লাগে?",
    "Usually a photo ID and address proof (Aadhaar / PAN), a recent photograph, bank account details and age proof. Depending on the plan the requirements may differ — I will give you the exact checklist before you apply.":
      "সাধারণত ফটো আইডি ও ঠিকানার প্রমাণ (আধার / প্যান), সাম্প্রতিক ছবি, ব্যাংক অ্যাকাউন্টের বিবরণ ও বয়সের প্রমাণ। পলিসি অনুযায়ী প্রয়োজনীয়তা আলাদা হতে পারে — আবেদনের আগে আমি আপনাকে সম্পূর্ণ চেকলিস্ট দেব।",
    "Can you help if my policy was bought from another agent?": "অন্য এজেন্টের কাছ থেকে কেনা পলিসিতেও কি সাহায্য পাব?",
    "Yes. Premium payment, policy servicing, nomination changes and claim help can be assisted for existing LIC policies as well. Just share your policy details and I will take it from there.":
      "হ্যাঁ। প্রিমিয়াম জমা, পলিসি সার্ভিসিং, মনোনয়ন পরিবর্তন ও ক্লেইম সহায়তা — বিদ্যমান LIC পলিসির জন্যও আমি সাহায্য করতে পারি। আপনার পলিসির বিবরণ জানান, বাকিটা আমি দেখব।",
    "Can the premium be paid online?": "প্রিমিয়াম কি অনলাইনে জমা দেওয়া যায়?",
    "Yes. LIC premiums can be paid through the LIC website, the LIC mobile app, UPI or net banking. I can guide you step by step if you are not comfortable doing it on your own.":
      "হ্যাঁ। LIC ওয়েবসাইট, LIC মোবাইল অ্যাপ, UPI বা নেট ব্যাংকিংয়ের মাধ্যমে প্রিমিয়াম জমা দেওয়া যায়। নিজে করতে অসুবিধা হলে আমি ধাপে ধাপে গাইড করব।",
    "My policy has lapsed. Can it be revived?": "আমার পলিসি ল্যাপস হয়ে গেছে। কি তা আবার চালু করা যাবে?",
    "In most cases a lapsed policy can be revived within the revival period, subject to LIC's conditions and payment of the due premiums with interest. Contact me with your policy number and I will explain your options.":
      "বেশিরভাগ ক্ষেত্রে রিভাইভাল পিরিয়ডের মধ্যে ল্যাপসড পলিসি আবার চালু করা যায় — LIC-এর শর্ত ও সুদসহ বকেয়া প্রিমিয়াম পরিশোধ সাপেক্ষে। পলিসি নম্বর নিয়ে যোগাযোগ করলে বিকল্পগুলো বুঝিয়ে দেব।",
    "Do you visit people at home?": "আপনি কি বাড়িতে গিয়ে দেখা করেন?",
    "Yes, within Amarargarh and nearby areas I am happy to meet you at home at a convenient time. For anything urgent, a phone call or WhatsApp message is the quickest.":
      "হ্যাঁ, অমরারগড় ও আশপাশের এলাকায় সুবিধাজনক সময়ে বাড়িতে গিয়ে দেখা করতে পেরে রাজি আছি। জরুরি কিছু হলে ফোন বা হোয়াটসঅ্যাপ বার্তাই সবচেয়ে দ্রুত।",
    "Let's talk about your family's security": "আসুন আপনার পরিবারের সুরক্ষা নিয়ে কথা বলি",
    "Call, message or request a free call back — whichever is easiest for you.":
      "কল করুন, মেসেজ করুন বা বিনামূল্যে কলব্যাকের অনুরোধ করুন — যা আপনার কাছে সহজ।",
    "Call / Mobile": "কল / মোবাইল",
    "Fastest way to reach me.": "আমার কাছে পৌঁছানোর দ্রুততম উপায়।",
    WhatsApp: "হোয়াটসঅ্যাপ",
    "Send a message anytime.": "যেকোনো সময় মেসেজ পাঠান।",
    "Chat on WhatsApp": "হোয়াটসঅ্যাপে চ্যাট করুন",
    "Visit / Address": "ঠিকানা",
    "Amarargarh, P.O. Amarargarh": "অমরারগড়, ডাকঘর অমরারগড়",
    "PIN 713144, West Bengal": "PIN 713144, পশ্চিমবঙ্গ",
    "Get directions →": "দিকনির্দেশ নিন →",
    "Fill this in and your details will open as a ready-made WhatsApp message. Nothing is stored on this website.":
      "এটি পূরণ করলে আপনার বিবরণসহ তৈরি হোয়াটসঅ্যাপ মেসেজ খুলে যাবে। এই ওয়েবসাইটে কিছুই সংরক্ষিত হয় না।",
    "Your name": "আপনার নাম",
    "Mobile number": "মোবাইল নম্বর",
    "What do you need help with?": "কী বিষয়ে সাহায্য চান?",
    "Best time to call": "কল করার সবচেয়ে ভালো সময়",
    "Message (optional)": "বার্তা (ঐচ্ছিক)",
    "New LIC policy": "নতুন LIC পলিসি",
    "Premium payment": "প্রিমিয়াম জমা",
    "Policy servicing / correction": "পলিসি সার্ভিসিং / সংশোধন",
    "Claim-related help": "ক্লেইম সংক্রান্ত সাহায্য",
    "Existing policy query": "বিদ্যমান পলিসি নিয়ে প্রশ্ন",
    "Just have a question": "শুধু একটা প্রশ্ন আছে",
    "Morning (9 AM – 12 PM)": "সকাল (৯টা – ১২টা)",
    "Afternoon (12 PM – 4 PM)": "দুপুর (১২টা – ৪টা)",
    "Evening (4 PM – 8 PM)": "সন্ধ্যা (৪টা – ৮টা)",
    "Any time": "যেকোনো সময়",
    "💬 Send on WhatsApp": "💬 হোয়াটসঅ্যাপে পাঠান",
    "Call or WhatsApp": "কল বা হোয়াটসঅ্যাপ",
    "Agent Code: 02423/46K": "এজেন্ট কোড: 02423/46K",
    "Post Office: Amarargarh · PIN 713144": "ডাকঘর: অমরারগড় · PIN 713144",
    "Speak in the language you're comfortable with": "যে ভাষায় স্বাচ্ছন্দ্য, সেটাতেই কথা বলুন",
    "Senior guidance & supervision": "সিনিয়র গাইডেন্স ও তত্ত্বাবধান",
    "Amarargarh, West Bengal — PIN 713144": "অমরারগড়, পশ্চিমবঙ্গ — PIN 713144",
    "Service area includes Amarargarh and nearby villages.": "সার্ভিস এলাকায় অমরারগড় ও আশপাশের গ্রামগুলো অন্তর্ভুক্ত।",
    "Open in Google Maps": "গুগল ম্যাপে খুলুন",
    "Your family's future deserves a plan.": "আপনার পরিবারের ভবিষ্যৎ একটি পরিকল্পনার দাবি রাখে।",
    "💬 WhatsApp": "💬 হোয়াটসঅ্যাপ",
    "📤 Share this page": "📤 এই পেজটি শেয়ার করুন",
    "Life insurance guidance, policy help and claim support for families in Amarargarh and nearby areas of West Bengal. LIC is an undertaking owned by the Government of India — established 1956.":
      "অমরারগড় ও পশ্চিমবঙ্গের আশপাশের এলাকার পরিবারের জন্য জীবন বীমা পরামর্শ, পলিসি সাহায্য ও ক্লেইম সহায়তা। LIC ভারত সরকারের মালিকানাধীন একটি প্রতিষ্ঠান — ১৯৫৬ সালে প্রতিষ্ঠিত।",
    Explore: "এক নজরে",
    "Life insurance guidance": "জীবন বীমা পরামর্শ",
    "New policy assistance": "নতুন পলিসি সহায়তা",
    "Premium payment help": "প্রিমিয়াম জমার সাহায্য",
    "Policy servicing": "পলিসি সার্ভিসিং",
    "Claim assistance": "ক্লেইম সহায়তা",
    "Reach us": "যোগাযোগ",
    "Call: 9232162949": "কল: 9232162949",
    "WhatsApp message": "হোয়াটসঅ্যাপ মেসেজ",
    "Request a call back": "কলব্যাকের অনুরোধ করুন",
    "This is the personal information page of an individual LIC agent and is not the official website of the Life Insurance Corporation of India. LIC, its plans, terms and benefits are governed by the Corporation's prevailing rules and are subject to change.":
      "এটি একজন ব্যক্তিগত LIC এজেন্টের তথ্যপাতা — এটি ভারতীয় জীবন বীমা নিগমের অফিসিয়াল ওয়েবসাইট নয়। LIC, এর পলিসি, শর্ত ও সুবিধা নিগমের প্রচলিত নিয়ম অনুযায়ী পরিচালিত হয় এবং পরিবর্তন সাপেক্ষ।",
    "Shibani Das · LIC Agent · Amarargarh, West Bengal, India 🇮🇳":
      "Shibani Das · LIC এজেন্ট · অমরারগড়, পশ্চিমবঙ্গ, ভারত 🇮🇳",
    "📞 Call now": "📞 এখনই কল করুন",
    "Please enter your name and mobile number.": "আপনার নাম ও মোবাইল নম্বর লিখুন।",
    "WhatsApp is opening with your message ready. If it did not open, please call ":
      "আপনার বার্তাসহ হোয়াটসঅ্যাপ খুলছে। না খুললে, কল করুন ",
    "Hello " : "হ্যালো ",
    ", I found your LIC page. 🙏": ", আপনার LIC পেজ দেখে কল করছি। 🙏",
    "Name: ": "নাম: ",
    "Mobile: ": "মোবাইল: ",
    "Need help with: ": "সাহায্য দরকার: ",
    "Best time to call: ": "কল করার সময়: ",
    "Message: ": "বার্তা: ",
    "Please call me back. Thank you!": "অনুগ্রহ করে আমাকে ফোন করুন। ধন্যবাদ!"
  };

  /* ---------- labelled placeholders ---------- */
  var PLACEHOLDER = {
    "e.g. Ramesh Das": "যেমন: রমেশ দাস",
    "e.g. 98765 43210": "যেমন: 98765 43210",
    "Write anything you'd like me to know…": "আমি যেন জানি, সেরকম কিছু লিখুন…"
  };

  /* ---------- structured blocks: full innerHTML for both languages ---------- */
  var MIXED = {
    "Friendly, honest guidance for your family's life insurance — right here in Amarargarh. এলআইসি পলিসি, প্রিমিয়াম, সার্ভিসিং আর ক্লেইম — সব পরিষেবা এক জায়গায়.": {
      en:
        'Friendly, honest guidance for your family\'s life insurance — right here in Amarargarh.\n              <span class="bangla">এলআইসি পলিসি, প্রিমিয়াম, সার্ভিসিং আর ক্লেইম — সব পরিষেবা এক জায়গায়।</span>',
      bn:
        '<span>আপনার পরিবারের জীবন বীমার জন্য সৎ ও সহজ পরামর্শ — ঠিক এখানে অমরারগড়ে।</span>\n              <span class="bangla">এলআইসি পলিসি, প্রিমিয়াম, সার্ভিসিং আর ক্লেইম — সব পরিষেবা এক জায়গায়।</span>'
    },
    "So far I have arranged 30+ LIC policies for families in this area, and guided many more with premium payments, policy servicing and claim support.": {
      en:
        'So far I have arranged <strong>30+ LIC policies</strong> for families in this area, and guided many more with premium payments, policy servicing and claim support.',
      bn:
        'এ পর্যন্ত আমি এই এলাকার পরিবারের জন্য <strong>৩০টির বেশি LIC পলিসি</strong> সাজিয়েছি, এবং আরও অনেককেই প্রিমিয়াম জমা, পলিসি সার্ভিসিং ও ক্লেইম সহায়তায় গাইড করেছি।'
    },
    "I work under the guidance and supervision of Super Agent / CLIA Dipak Bhakat, so there is senior experience behind every suggestion I make.": {
      en:
        'I work under the guidance and supervision of Super Agent / CLIA <strong>Dipak Bhakat</strong>, so there is senior experience behind every suggestion I make.',
      bn:
        'আমি সুপার এজেন্ট / CLIA <strong>দীপক ভকত</strong>-এর তত্ত্বাবধানে ও নির্দেশনায় কাজ করি — তাই প্রতিটি পরামর্শের পেছনে থাকে সিনিয়র অভিজ্ঞতা।'
    },
    "Please note: the exact plans, benefits, returns and eligibility are decided by LIC under its prevailing rules. I will help you compare the current options and choose what actually fits your family. This page is only general information, not a promise of returns.": {
      en:
        '<strong>Please note:</strong> the exact plans, benefits, returns and eligibility are decided by LIC under its prevailing rules. I will help you compare the current options and choose what actually fits your family. This page is only general information, not a promise of returns.',
      bn:
        '<strong>লক্ষ করুন:</strong> নির্দিষ্ট পলিসি, সুবিধা, রিটার্ন ও যোগ্যতা LIC-এর প্রচলিত নিয়ম অনুযায়ী নির্ধারিত হয়। বর্তমান বিকল্পগুলো তুলনা করে আপনার পরিবারের জন্য সত্যিই উপযুক্তটা বাছাইয়ে সাহায্য করব। এই পেজ শুধু সাধারণ তথ্য — রিটার্নের প্রতিশ্রুতি নয়।'
    },
    "One phone call today can give you real peace of mind. আজই একটু সময় দিন — বাকিটা আমি দেখব।": {
      en:
        'One phone call today can give you real peace of mind. <span class="bangla">আজই একটু সময় দিন — বাকিটা আমি দেখব।</span>',
      bn:
        '<span>আজ একটু ফোন কলই দিতে পারে সত্যিকারের মানসিক শান্তি।</span> <span class="bangla">আজই একটু সময় দিন — বাকিটা আমি দেখব।</span>'
    },
    "By sending, WhatsApp will open with your message ready. You can review it before sending. Prefer to talk? Just call 9232162949.": {
      en:
        'By sending, WhatsApp will open with your message ready. You can review it before sending. Prefer to talk? Just <a href="tel:+919232162949" class="nowrap">call 9232162949</a>.',
      bn:
        'পাঠালে আপনার বার্তাসহ হোয়াটসঅ্যাপ খুলে যাবে — পাঠানোর আগে দেখে নিতে পারবেন। কথা বলতে চান? শুধু <a href="tel:+919232162949" class="nowrap">9232162949</a> নম্বরে কল করুন।'
    },
    "Usual hours: Monday – Saturday, 9:00 AM – 8:00 PM. For anything urgent, WhatsApp me any time and I will reply as soon as I can.": {
      en:
        '<b>Usual hours:</b> Monday – Saturday, 9:00 AM – 8:00 PM. For anything urgent, WhatsApp me any time and I will reply as soon as I can.',
      bn:
        '<b>সাধারণ সময়:</b> সোমবার – শনিবার, সকাল ৯টা – রাত ৮টা। জরুরি কিছু থাকলে যেকোনো সময় হোয়াটসঅ্যাপ করুন — যত তাড়াতাড়ি সম্ভব উত্তর দেব।'
    }
  };

  /* ---------- title / description / share text ---------- */
  var TITLES = {
    en: "Shibani Das — LIC Agent in Amarargarh | Policy & Claim Help",
    bn: "Shibani Das — অমরারগড়ের LIC এজেন্ট | পলিসি ও ক্লেইম সাহায্য"
  };
  var DESCS = {
    en: "Shibani Das (শিবানী দাস) — LIC agent in Amarargarh, West Bengal (PIN 713144). Free help with LIC policies, premium payment, servicing & claims. Call 9232162949.",
    bn: "Shibani Das (শিবানী দাস) — অমরারগড়, পশ্চিমবঙ্গের (PIN 713144) LIC এজেন্ট। LIC পলিসি, প্রিমিয়াম জমা, সার্ভিসিং ও ক্লেইমে বিনামূল্যে সাহায্য। কল করুন 9232162949।"
  };
  var SHARE = {
    en: "Shibani Das — LIC Agent in Amarargarh, West Bengal. Free help with LIC policies, premiums & claims. Call 9232162949.",
    bn: "Shibani Das — অমরারগড়, পশ্চিমবঙ্গের LIC এজেন্ট। LIC পলিসি, প্রিমিয়াম ও ক্লেইমে বিনামূল্যে সাহায্য। কল করুন 9232162949।"
  };

  /* ---------- build ---------- */
  var textStore = []; // [node, en, bn]
  var phStore = []; // [el, en, bn]
  var mixedStore = []; // [el, key]

  var walk = document.createTreeWalker ? function (root) {
    var nodes = [];
    var it = document.createTreeWalker(root, NodeFilter.SHOW_ELEMENT);
    var n;
    while ((n = it.nextNode())) nodes.push(n);
    return nodes;
  } : function (root) { return Array.prototype.slice.call(root.querySelectorAll("*")); };

  function build() {
    var els = walk(document.body);
    els.forEach(function (el) {
      // placeholders
      if (el.hasAttribute && el.hasAttribute("placeholder")) {
        var ph = norm(el.getAttribute("placeholder"));
        if (PLACEHOLDER[ph]) phStore.push([el, el.getAttribute("placeholder"), PLACEHOLDER[ph]]);
      }
      // direct text children
      Array.prototype.forEach.call(el.childNodes, function (node) {
        if (node.nodeType !== 3) return;
        var raw = node.nodeValue;
        var key = norm(raw);
        if (key && BN[key]) textStore.push([node, raw, BN[key]]);
      });
      // structured (only once per element, by exact textContent match)
      var t = norm(el.textContent || "");
      if (!el.__i18nMixed && MIXED[t]) {
        el.__i18nMixed = true;
        mixedStore.push([el, t]);
      }
    });
    // save current texts on the language button
    var btn = document.getElementById("langBtn");
    if (btn) btn.__en = "বাংলা"; // shown when currently English
  }

  function setShare(lang) {
    var base = (location.origin && location.protocol !== "file:") ? location.href : "https://shibanidaslic.github.io/";
    var msg = SHARE[lang] + "\n" + base;
    document.querySelectorAll(".js-share").forEach(function (a) {
      a.setAttribute("href", "https://wa.me/?text=" + encodeURIComponent(msg));
    });
  }

  function apply(lang) {
    var toBn = lang === "bn";
    document.documentElement.setAttribute("lang", toBn ? "bn" : "en");

    textStore.forEach(function (rec) {
      rec[0].nodeValue = toBn ? rec[2] : rec[1];
    });
    phStore.forEach(function (rec) {
      rec[0].setAttribute("placeholder", toBn ? rec[2] : rec[1]);
    });
    mixedStore.forEach(function (rec) {
      rec[0].innerHTML = MIXED[rec[1]][lang];
    });

    var btn = document.getElementById("langBtn");
    if (btn) {
      btn.textContent = toBn ? "English" : "বাংলা";
      btn.setAttribute(
        "aria-label",
        toBn ? "View this page in English" : "View this page in Bengali"
      );
    }

    /* close open mobile menu so translated links re-tap cleanly */
    var nav = document.querySelector(".nav");
    var navToggle = document.querySelector(".nav-toggle");
    if (nav && nav.classList.contains("open")) {
      nav.classList.remove("open");
      if (navToggle) {
        navToggle.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
      }
    }

    /* title / description */
    document.title = TITLES[lang];
    var d = document.querySelector('meta[name="description"]');
    if (d) d.setAttribute("content", DESCS[lang]);

    setShare(lang);
    window.__siteLang = lang;
  }

  function init() {
    build();
    var saved = null;
    try { saved = localStorage.getItem("site-lang"); } catch (e) {}
    var lang = saved === "bn" ? "bn" : saved === "en" ? "en" : null;
    if (!lang) lang = (navigator.language || "en").toLowerCase().indexOf("bn") === 0 ? "bn" : "en";
    apply(lang);

    var btn = document.getElementById("langBtn");
    if (btn) {
      btn.addEventListener("click", function () {
        var next = window.__siteLang === "bn" ? "en" : "bn";
        try { localStorage.setItem("site-lang", next); } catch (e) {}
        apply(next);
      });
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();