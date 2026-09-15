import type {
  Activity,
  FAQItem,
  Founder,
  GoverningBodyMember,
  ImpactMetric,
  NavigationItem,
  TimelineStep,
} from "@/types/site";

export const siteContent = {
  organization: {
    name: "Happiness Promoters",
    affiliation:
      "Rajagiri School of Engineering & Technology (Autonomous)",
    location: [
      "Rajagiri School of Engineering & Technology,",
      "Rajagiri Valley,",
      "Kakkanad,",
      "Kochi, Kerala 682039",
    ],
  },
  logo: {
    src: "/logos/Official Logo.png",
    alt: "Happiness Promoters logo",
    width: 500,
    height: 500,
  },
  navigation: [
    { label: "About", href: "/#about" },
    { label: "Mission", href: "/#mission" },
    { label: "Services", href: "/#service-areas" },
    { label: "Activities", href: "/#activities" },
    { label: "Impact", href: "/#impact" },
    { label: "Founders", href: "/#founders" },
    { label: "Governing Body", href: "/governing-body" },
    { label: "Contact", href: "/#contact" },
  ] satisfies NavigationItem[],
  hero: {
    badge: "One Kind Act at a Time",
    mainHeading: "Happiness Promoters",
    subHeading: "Action for Happiness",
    headline: "Together, We Can Transform Lives",
    subtitle:
      "Join a growing community of volunteers committed to serving those in need through education, food support, healthcare, environmental initiatives and compassionate outreach.",
    buttons: ["Become a Volunteer", "Explore Our Initiatives"],
  },
  about: {
    copy:
      "Our initiative connects students, professionals and members of the public with meaningful opportunities to serve communities through education, healthcare, environmental protection and humanitarian outreach.",
    welcome: "Everyone is welcome to volunteer.",
    vision: "Let every existence in the universe be happy",
    mission:
      "Create clusters of three to four neighbourhood families who form as a group and agree by a written contact to help each other except in matters of money.",
    distinctiveFeature:
      "The distinctive feature of Happiness Promoters is that it is not primarily a charity organisation; it is trying to create a culture of mutual care among neighbourhood families. Therefore, the income-generating activities should ideally also promote happiness, relationships, learning, service and community.",
  },
  mission: [
    "Form neighbourhood family clusters.",
    "Foster a culture of mutual care.",
    "Promote relationships & learning.",
    "Serve communities with compassion.",
  ],
  serviceAreas: [
    "Food Distribution",
    "Educational Support",
    "Clothes Donation",
    "Blood Donation Camps",
    "Medical Camps",
    "Disaster Relief",
    "Tree Plantation",
    "Beach Cleanup",
    "Community Cleanup",
    "Old Age Home Visits",
    "Orphanage Support",
  ],
  timeline: [
    {
      title: "Register your interest",
      description:
        "Share your contact details and preferred service areas through the volunteer form.",
    },
    {
      title: "Receive updates",
      description: "Updates are shared through email, phone and WhatsApp.",
    },
    {
      title: "Choose an activity",
      description:
        "Upcoming activities include food distribution, beach cleanup and blood donation camps.",
    },
    {
      title: "Serve with compassion",
      description:
        "Volunteer participation supports education, healthcare, environmental protection and humanitarian outreach.",
    },
  ] satisfies TimelineStep[],
  upcomingActivities: [
    {
      title: "Orphanage Visit",
      date: "15 August 2026",
      location: "Kakkanad, Kochi",
      volunteers: "25 Volunteers Needed",
    },
    {
      title: "Food Distribution Drive",
      date: "22 August 2026",
      location: "Kakkanad, Kochi",
      volunteers: "30 Volunteers Needed",
    },
    {
      title: "Blood Donation Camp",
      date: "30 August 2026",
      location: "RSET Campus",
      volunteers: "Open Registration",
    },
  ] satisfies Activity[],
  impact: [
    { value: 520, suffix: "+", label: "Volunteers" },
    { value: 48, suffix: "", label: "Community Drives" },
    { value: 3200, suffix: "+", label: "Meals Distributed" },
    { value: 1150, suffix: "+", label: "Students Supported" },
    { value: 600, suffix: "+", label: "Trees Planted" },
  ] satisfies ImpactMetric[],
  testimonials: [
    "Volunteering here helped me understand the true meaning of community service.",
    "This initiative made it easy to contribute my weekends to meaningful causes.",
  ],
  faq: [
    {
      question: "Can anyone volunteer?",
      answer: "Yes.",
    },
    {
      question: "Do I need to be an NCC cadet?",
      answer: "No.",
    },
    {
      question: "Is there any registration fee?",
      answer: "No.",
    },
    {
      question: "How will I receive updates?",
      answer: "Through email, phone and WhatsApp.",
    },
  ] satisfies FAQItem[],
  contact: {
    emailLabel: "Email",
    email: "@gmail.com",
    phoneLabel: "Phone",
    phone: "+91 98477 47650",
    whatsappLabel: "WhatsApp",
    whatsapp: "+91 95676 83959",
  },
  images: {
    hero: {
      src: "/banner/Main Banner.png",
      alt: "Happiness Promoters main banner",
    },
    about: {
      src: "https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&w=1400&q=85",
      alt: "Children gathered for a community education session",
    },
    environment: {
      src: "https://images.unsplash.com/photo-1618477461853-cf6ed80faba5?auto=format&fit=crop&w=1400&q=85",
      alt: "Volunteers cleaning a beach shoreline",
    },
  },
  founders: [
    {
      name: "Fr. Dr. George Peter Pittappillil",
      role: "Director, Renewable Energy Centre, Mithradham & Professor of Practice, RSET",
      bio: "Director, Renewable Energy Centre, Mithradham, Chunagamvely, Aluva. Professor of Practice, Rajagiri Engineering College (RSET), Kakkanad. Post Doctoral Fellow of Material Science, Max Planck Institute (International Research Institute), Stuttgart. Author of 5 books (Theme, science, society, renewable energy, reflections). Happy to be known as a happy person spreading love and happiness for all living beings. My Life Mission to spread happiness as best as I can.",
      image: "/founders/1.jpeg",
    },
    {
      name: "Georgekutty Kariyanappally",
      role: "Solar Energy Advocate & Nature Enthusiast",
      bio: "6A. Skyline Palmtop Apts.\nSeaport- Airport Road\nOpp. Bharat Mata College\nTrikkakara, Cochin 682021\n\nA true hypocrite, Passion for Nature and Solar energy but living in a concrete high rise flat in Cochin city. Talk about family values but sent my children away from home to Germany for higher education and to accumulate more money. Always happy to join in almost all the gatherings and organisations to entertain myself thereby sharing happiness to others.",
      image: "/founders/2.jpeg",
    },
    {
      name: "Fr. Jijo Kadavan CMI",
      role: "Director, HR - Rajagiri Hospital",
      bio: "Director, HR- Rajagiri hospital, Chunangamvely.\nMA, BEd. Staying at Mithradam Renewable Energy Center.",
      image: "/founders/3.jpeg",
    },
    {
      name: "Dr. Geo Baby",
      role: "Director, Holy Grace Academy of Management Studies",
      bio: "He is trained in Personal Counseling, NLP, Yoga and Meditation, and brings over 30 years of experience in catechism teaching, alongside more than 24 years of experience in academic teaching and management education.\n\nHe holds a PhD in Management (Transformational Leadership) from CUSAT. Geo Baby holds bachelor's degrees in Philosophy and Zoology, and master's degrees in Zoology and Human Resource Management (Rajagiri).\n\nHe began his academic career as a Lecturer at DCSMAT, Vagamon, and then moved to SNGIST, N. Paravur, where he served as Dean of the Faculty of Management Studies. He headed Viswajyothi School of Management Studies, Vazhakkulam, for four years, and was Professor & Director, School of Management, DePaul Institute of Science and Technology, Angamaly, for four years. He is the recipient of the NIPM Award for Outstanding Management Educator of the Year, 2017.\n\nHe was a member of the Board of Studies in Management, KTU, and also serves on the Board of Studies in Management Studies of Nirmala College, Muvattupuzha (Autonomous), and Albertian Institute of Management Studies, as an Expert for the Vice Chancellor's panel. He has publications in the areas of Training Effectiveness and ESG practices.\n\nOn the pastoral front, he has more than 30 years of experience in catechism teaching. He was a Promoter of Paravur Forane. He was an executive member of the Pastoral Council of the Ernakulam-Angamaly Archdiocese, and is a member of the Resource Team of the Catechism Department.",
      image: "/founders/4.jpeg",
    },
    {
      name: "Lt. Dr. Vishnu Sankar",
      role: "Assistant Professor, RSET & Associate NCC Officer (Lieutenant)",
      bio: "Lt. Dr. Vishnu Sankar completed his Ph.D. in Thermal Engineering (2023) from CUSAT, M.Tech in Thermal Engineering (2015) with 3rd Rank in aggregate from CUSAT University and B.Tech in Mechanical Engineering (2013) with 7th Rank in aggregate from CUSAT University. Dr. Vishnu, who began his teaching career in 2015 at Holy Kings is currently working as Assistant Professor in Department of Mechanical Engineering at Rajagiri School of Engineering and Technology, Kakkanad from June 2016. He is an approved Research Guide for Doctoral Studies at APJ Abdul Kalam Technological University.\n\nLt. Dr. Vishnu Sankar successfully completed three months Pre-Commissioned Course (PRCN) training conducted from 29th July 2024 to 9th October 2024 @ Officers Training Academy, Kamptee, Nagpur, India and commissioned as Associate NCC Officer with a rank of Lieutenant in the Army wing. Dr. Vishnu Sankar won Gold Medal (First Prize) in Inter COMPANY CHAMPIONSHIP @ Officers Training Academy, Kamptee. He Judged CBSE Regional level Science Exhibition 2016, SAE Mahindra AWIM 2019 JET TOY Competition, Crossroads-15, Crossroads-17 and Crossroads-19.\n\nDr. VISHNU SANKAR (KTU-F20551), Assistant Professor, MECHANICAL ENGINEERING, RAJAGIRI SCHOOL OF ENGINEERING & TECHNOLOGY is an approved Ph.D. Research Supervisor of APJ ABDUL KALAM TECHNOLOGICAL UNIVERSITY from 15/10/2024. The Supervisorship is approved vide University Order No.U.O.No.2606/2024/KTU Dated 27/08/2024. He has published and presented several research papers in the various national and international journals, conferences and seminars, besides having been part of the various funded research projects. He also have 5 granted Patents to his credit. He has more than 232 Google Scholar citations with h-index 7, Research Interest Score of 105.8 and ResearchGate Score of 12.03. He won the \"Best Student Award\" of Chinmaya Vidyalaya for academic year 2008-2009. He is a Life Member of The Institution Of Engineers India (IEI), The American Society of Mechanical Engineers (ASME) & Indian Society For Technical Education (ISTE).\n\nHe is one among the ASNT International LEVEL 2 Certified Mechanical Engineer in Ultrasonic Testing, Magnetic Particle Testing, Liquid Penetrant Testing, Radiographic Testing and Radiographic Film Interpretation. He is also one among the National Council for Technology and Training (NACTET) Certified Professional in QA/QC Engineering, Piping Inspection, Project Management, Welding and Oil & Gas. He was Observer under National Testing Agency (NTA) of Government of India Exam for NEET 2023 & 2024 and CUET (PG) 2025 exams. He was also Expert panel member (Evaluator) for the Young Innovators Program (YIP) 4.0 & 6.0 organized by Kerala Startup Mission in association with Kerala Development and Innovation Strategic Council (K-DISC) and Expert Commissioner for District Consumer Disputes Redressal Commission, Ernakulam. His Area of Research interest includes Coatings in I.C Engines, Biodiesel production & testing in I.C Engines, Thermodynamics and Thermal Engineering. He is also one among the few candidates who qualified NPTEL Online Certification course on THERMODYNAMICS by IIT Kharagpur with Elite category certificate, Latex Online Certification course offered by the Spoken Tutorial Project by IIT Bombay, ASME Online course on Standards & Certification and online certification courses offered by Coursera. He was the QUIZ MASTER of AavISHKAR 2KI6 all kerala school quiz competition and other 54 Techno quiz competitions.",
      image: "/founders/5.jpeg",
    },
    {
      name: "Sr. Dr. Liji Joseph",
      role: "M.Phil., Ph.D., Licensed Clinical Psychologist",
      bio: "A Licensed Clinical Psychologist (RCI-CRR No. 22157) and Registered Mental Health Professional (KSMHA Reg. No. CP86/2024/SMHA) with over 16 years of professional experience. Currently serving at Navajyothi Centre for Child and Adolescent Mental Health and Kusumagiri Mental Health Centre, Kakkanad, Kochi. Expertise in psychological assessment, psychometric testing, diagnosis, counselling, and evidence-based psychotherapy for children, adolescents, adults, couples, and families.\n\nMission: Helping individuals and families discover their inner strength, build resilience, and find true happiness.",
      image: "/founders/6.jpeg",
    },
    {
      name: "Tina Theresa Thomas",
      role: "Retired Divisional Engineer, BSNL & Humanist",
      bio: "Graduated in Mathematics. Retired Divisional Engineer BSNL. Have a keen interest in social reengineering initiatives. Believes that only decentralized human coalitions can help peaceful coexistence and reduce human suffering. A humanist who desires to live in harmony with nature, humanity, and God.\n\nHusband: Babu Dominic\nDaughters: Mythri and Daya.",
      image: "/founders/7.jpeg",
    },
    {
      name: "Soudha Salim",
      role: "Principal, Al-Fitrah Islamic School, Sreemoolanagaram",
      bio: "\"Every great achievement begins with the courage to take the first step. With the launch of this new initiative, we are stepping into a future full of possibilities. Guided by our core values, we aim to inspire awareness, empower communities, and deliver excellence in everything we do. Join us as we pave the way for a new era of growth.\"",
      image: "/founders/8.jpeg",
    },
    {
      name: "Dr. Elizabeth Varghese",
      role: "Family Medicine & Palliative Care Specialist",
      bio: "Has done post graduation in General Practice/Family Medicine. After undergoing training in Palliative care, has worked for four years in Palliative care in an N.G.O. (2019-2023). Based on that experience she has written a book 'Wings of solace', which is a collection of anecdotes derived from the experience of working in Palliative care. The book has a Malayalam version also. Is interested in spreading the ideas of respecting the autonomy of patients and good death and also the universalization of Advance living will.",
      image: "/founders/9.jpeg",
    },
    {
      name: "Mk Shakkir",
      role: "Manager, Al-Fitrah Islamic School, Sreemoolanagaram",
      bio: "**\"Driving Innovation, Leading Change\"**\n\n\"As we embark on this exciting new journey, our focus remains steadfast on driving meaningful impact and creating valuable solutions. Awareness represents a significant milestone in our growth, and we are committed to fostering innovation and excellence every step of the way. Together with our incredible team, we look forward to building a brighter, more connected future.\"",
      image: "/founders/10.jpeg",
    },
    {
      name: "Seena Th Thahir",
      role: "Health & Educational Standing Committee Chairperson, Sreemoolanagaram Grama Panchayath",
      bio: "\"True happiness begins with a healthy community. Nurturing health education is the first step toward a brighter, happier tomorrow.\"",
      image: "/founders/11.jpeg",
    },
    {
      name: "Ranjit Sadanandan",
      role: "Yoga Coach, Cosmic Rhythm International School of Yoga & Research Center",
      bio: "I am a retired Under Secretary from the Government and currently serve as a Yoga Coach at Cosmic Rhythm International School of Yoga and Research Center, Cochin.\n\nI hold a Master's Degree in Yoga from Annamalai University, Chidambaram, Tamil Nadu, and I am a qualified Yoga Therapist from the Bihar School of Yoga, specializing in the management of lifestyle diseases through yogic practices.\n\nAt the centre, I conduct training in:\n\n- Yogasanas\n- Surya Namaskara\n- Pranayama\n- Bandhas\n- Yoga Nidra\n- Yoga Therapy\n- Mudra Therapy\n\nMy mission is to help individuals improve their physical health, mental well-being, and overall quality of life through the authentic principles of yoga. I believe that regular yoga practice fosters balance, inner strength, and a healthier lifestyle.\n\n\"Once you commit yourself to yoga, happiness and inner peace naturally become a part of your life.\"",
      image: "/founders/12.jpeg",
    },
    {
      name: "Hussain Swalahi",
      role: "HST ARABIC, Govt.HSS Kuttamassery",
      bio: "\"Education is not just about teaching words, it's about lighting up lives. Inspiring the younger generation with wisdom and values brings true happiness.\"",
      image: "/founders/13.jpeg",
    },
  ] satisfies Founder[],
  governingBody: [
    {
      name: "Fr. Dr. George Peter Pittappillil",
      designation: "President",
      category: "office-bearer",
      role: "Director, Renewable Energy Centre, Mithradham & Professor of Practice, RSET",
      bio: "Director, Renewable Energy Centre, Mithradham, Chunagamvely, Aluva. Professor of Practice, Rajagiri Engineering College (RSET), Kakkanad. Post Doctoral Fellow of Material Science, Max Planck Institute (International Research Institute), Stuttgart. Author of 5 books (Theme, science, society, renewable energy, reflections). Happy to be known as a happy person spreading love and happiness for all living beings. My Life Mission to spread happiness as best as I can.",
      image: "/founders/1.jpeg",
    },
    {
      name: "Mk Shakkir",
      designation: "Vice President",
      category: "office-bearer",
      role: "Manager, Al-Fitrah Islamic School, Sreemoolanagaram",
      bio: "**\"Driving Innovation, Leading Change\"**\n\n\"As we embark on this exciting new journey, our focus remains steadfast on driving meaningful impact and creating valuable solutions. Awareness represents a significant milestone in our growth, and we are committed to fostering innovation and excellence every step of the way. Together with our incredible team, we look forward to building a brighter, more connected future.\"",
      image: "/founders/10.jpeg",
    },
    {
      name: "Georgekutty Kariyanappally",
      designation: "Chief Mentor",
      category: "office-bearer",
      role: "Solar Energy Advocate & Nature Enthusiast",
      bio: "6A. Skyline Palmtop Apts.\nSeaport- Airport Road\nOpp. Bharat Mata College\nTrikkakara, Cochin 682021\n\nA true hypocrite, Passion for Nature and Solar energy but living in a concrete high rise flat in Cochin city. Talk about family values but sent my children away from home to Germany for higher education and to accumulate more money. Always happy to join in almost all the gatherings and organisations to entertain myself thereby sharing happiness to others.",
      image: "/founders/2.jpeg",
    },
    {
      name: "Lt. Dr. Vishnu Sankar",
      designation: "Secretary",
      category: "office-bearer",
      role: "Assistant Professor, RSET & Associate NCC Officer (Lieutenant)",
      bio: "Lt. Dr. Vishnu Sankar completed his Ph.D. in Thermal Engineering (2023) from CUSAT, M.Tech in Thermal Engineering (2015) with 3rd Rank in aggregate from CUSAT University and B.Tech in Mechanical Engineering (2013) with 7th Rank in aggregate from CUSAT University. Dr. Vishnu, who began his teaching career in 2015 at Holy Kings is currently working as Assistant Professor in Department of Mechanical Engineering at Rajagiri School of Engineering and Technology, Kakkanad from June 2016. He is an approved Research Guide for Doctoral Studies at APJ Abdul Kalam Technological University.\n\nLt. Dr. Vishnu Sankar successfully completed three months Pre-Commissioned Course (PRCN) training conducted from 29th July 2024 to 9th October 2024 @ Officers Training Academy, Kamptee, Nagpur, India and commissioned as Associate NCC Officer with a rank of Lieutenant in the Army wing. Dr. Vishnu Sankar won Gold Medal (First Prize) in Inter COMPANY CHAMPIONSHIP @ Officers Training Academy, Kamptee. He Judged CBSE Regional level Science Exhibition 2016, SAE Mahindra AWIM 2019 JET TOY Competition, Crossroads-15, Crossroads-17 and Crossroads-19.\n\nDr. VISHNU SANKAR (KTU-F20551), Assistant Professor, MECHANICAL ENGINEERING, RAJAGIRI SCHOOL OF ENGINEERING & TECHNOLOGY is an approved Ph.D. Research Supervisor of APJ ABDUL KALAM TECHNOLOGICAL UNIVERSITY from 15/10/2024. The Supervisorship is approved vide University Order No.U.O.No.2606/2024/KTU Dated 27/08/2024. He has published and presented several research papers in the various national and international journals, conferences and seminars, besides having been part of the various funded research projects. He also have 5 granted Patents to his credit. He has more than 232 Google Scholar citations with h-index 7, Research Interest Score of 105.8 and ResearchGate Score of 12.03. He won the \"Best Student Award\" of Chinmaya Vidyalaya for academic year 2008-2009. He is a Life Member of The Institution Of Engineers India (IEI), The American Society of Mechanical Engineers (ASME) & Indian Society For Technical Education (ISTE).\n\nHe is one among the ASNT International LEVEL 2 Certified Mechanical Engineer in Ultrasonic Testing, Magnetic Particle Testing, Liquid Penetrant Testing, Radiographic Testing and Radiographic Film Interpretation. He is also one among the National Council for Technology and Training (NACTET) Certified Professional in QA/QC Engineering, Piping Inspection, Project Management, Welding and Oil & Gas. He was Observer under National Testing Agency (NTA) of Government of India Exam for NEET 2023 & 2024 and CUET (PG) 2025 exams. He was also Expert panel member (Evaluator) for the Young Innovators Program (YIP) 4.0 & 6.0 organized by Kerala Startup Mission in association with Kerala Development and Innovation Strategic Council (K-DISC) and Expert Commissioner for District Consumer Disputes Redressal Commission, Ernakulam. His Area of Research interest includes Coatings in I.C Engines, Biodiesel production & testing in I.C Engines, Thermodynamics and Thermal Engineering. He is also one among the few candidates who qualified NPTEL Online Certification course on THERMODYNAMICS by IIT Kharagpur with Elite category certificate, Latex Online Certification course offered by the Spoken Tutorial Project by IIT Bombay, ASME Online course on Standards & Certification and online certification courses offered by Coursera. He was the QUIZ MASTER of AavISHKAR 2KI6 all kerala school quiz competition and other 54 Techno quiz competitions.",
      image: "/founders/5.jpeg",
    },
    {
      name: "Dr. Geo Baby",
      designation: "Joint Secretary",
      category: "office-bearer",
      role: "Director, Holy Grace Academy of Management Studies",
      bio: "He is trained in Personal Counseling, NLP, Yoga and Meditation, and brings over 30 years of experience in catechism teaching, alongside more than 24 years of experience in academic teaching and management education.\n\nHe holds a PhD in Management (Transformational Leadership) from CUSAT. Geo Baby holds bachelor's degrees in Philosophy and Zoology, and master's degrees in Zoology and Human Resource Management (Rajagiri).\n\nHe began his academic career as a Lecturer at DCSMAT, Vagamon, and then moved to SNGIST, N. Paravur, where he served as Dean of the Faculty of Management Studies. He headed Viswajyothi School of Management Studies, Vazhakkulam, for four years, and was Professor & Director, School of Management, DePaul Institute of Science and Technology, Angamaly, for four years. He is the recipient of the NIPM Award for Outstanding Management Educator of the Year, 2017.\n\nHe was a member of the Board of Studies in Management, KTU, and also serves on the Board of Studies in Management Studies of Nirmala College, Muvattupuzha (Autonomous), and Albertian Institute of Management Studies, as an Expert for the Vice Chancellor's panel. He has publications in the areas of Training Effectiveness and ESG practices.\n\nOn the pastoral front, he has more than 30 years of experience in catechism teaching. He was a Promoter of Paravur Forane. He was an executive member of the Pastoral Council of the Ernakulam-Angamaly Archdiocese, and is a member of the Resource Team of the Catechism Department.",
      image: "/founders/4.jpeg",
    },
    {
      name: "Tina Theresa Thomas",
      designation: "Treasurer",
      category: "office-bearer",
      role: "Retired Divisional Engineer, BSNL & Humanist",
      bio: "Graduated in Mathematics. Retired Divisional Engineer BSNL. Have a keen interest in social reengineering initiatives. Believes that only decentralized human coalitions can help peaceful coexistence and reduce human suffering. A humanist who desires to live in harmony with nature, humanity, and God.\n\nHusband: Babu Dominic\nDaughters: Mythri and Daya.",
      image: "/founders/7.jpeg",
    },
    {
      name: "Fr. Jijo Kadavan CMI",
      designation: "Executive Member",
      category: "executive-member",
      role: "Director, HR - Rajagiri Hospital",
      bio: "Director, HR- Rajagiri hospital, Chunangamvely.\nMA, BEd. Staying at Mithradam Renewable Energy Center.",
      image: "/founders/3.jpeg",
    },
    {
      name: "Sr. Dr. Liji Joseph",
      designation: "Executive Member",
      category: "executive-member",
      role: "M.Phil., Ph.D., Licensed Clinical Psychologist",
      bio: "A Licensed Clinical Psychologist (RCI-CRR No. 22157) and Registered Mental Health Professional (KSMHA Reg. No. CP86/2024/SMHA) with over 16 years of professional experience. Currently serving at Navajyothi Centre for Child and Adolescent Mental Health and Kusumagiri Mental Health Centre, Kakkanad, Kochi. Expertise in psychological assessment, psychometric testing, diagnosis, counselling, and evidence-based psychotherapy for children, adolescents, adults, couples, and families.\n\nMission: Helping individuals and families discover their inner strength, build resilience, and find true happiness.",
      image: "/founders/6.jpeg",
    },
    {
      name: "Soudha Salim",
      designation: "Executive Member",
      category: "executive-member",
      role: "Principal, Al-Fitrah Islamic School, Sreemoolanagaram",
      bio: "\"Every great achievement begins with the courage to take the first step. With the launch of this new initiative, we are stepping into a future full of possibilities. Guided by our core values, we aim to inspire awareness, empower communities, and deliver excellence in everything we do. Join us as we pave the way for a new era of growth.\"",
      image: "/founders/8.jpeg",
    },
    {
      name: "Dr. Elizabeth Varghese",
      designation: "Executive Member",
      category: "executive-member",
      role: "Family Medicine & Palliative Care Specialist",
      bio: "Has done post graduation in General Practice/Family Medicine. After undergoing training in Palliative care, has worked for four years in Palliative care in an N.G.O. (2019-2023). Based on that experience she has written a book 'Wings of solace', which is a collection of anecdotes derived from the experience of working in Palliative care. The book has a Malayalam version also. Is interested in spreading the ideas of respecting the autonomy of patients and good death and also the universalization of Advance living will.",
      image: "/founders/9.jpeg",
    },
    {
      name: "Seena Th Thahir",
      designation: "Executive Member",
      category: "executive-member",
      role: "Health & Educational Standing Committee Chairperson, Sreemoolanagaram Grama Panchayath",
      bio: "\"True happiness begins with a healthy community. Nurturing health education is the first step toward a brighter, happier tomorrow.\"",
      image: "/founders/11.jpeg",
    },
    {
      name: "Ranjit Sadanandan",
      designation: "Executive Member",
      category: "executive-member",
      role: "Yoga Coach, Cosmic Rhythm International School of Yoga & Research Center",
      bio: "I am a retired Under Secretary from the Government and currently serve as a Yoga Coach at Cosmic Rhythm International School of Yoga and Research Center, Cochin.\n\nI hold a Master's Degree in Yoga from Annamalai University, Chidambaram, Tamil Nadu, and I am a qualified Yoga Therapist from the Bihar School of Yoga, specializing in the management of lifestyle diseases through yogic practices.\n\nAt the centre, I conduct training in:\n\n- Yogasanas\n- Surya Namaskara\n- Pranayama\n- Bandhas\n- Yoga Nidra\n- Yoga Therapy\n- Mudra Therapy\n\nMy mission is to help individuals improve their physical health, mental well-being, and overall quality of life through the authentic principles of yoga. I believe that regular yoga practice fosters balance, inner strength, and a healthier lifestyle.\n\n\"Once you commit yourself to yoga, happiness and inner peace naturally become a part of your life.\"",
      image: "/founders/12.jpeg",
    },
    {
      name: "Hussain Swalahi",
      designation: "Executive Member",
      category: "executive-member",
      role: "HST ARABIC, Govt.HSS Kuttamassery",
      bio: "\"Education is not just about teaching words, it's about lighting up lives. Inspiring the younger generation with wisdom and values brings true happiness.\"",
      image: "/founders/13.jpeg",
    },
  ] satisfies GoverningBodyMember[],
} as const;

