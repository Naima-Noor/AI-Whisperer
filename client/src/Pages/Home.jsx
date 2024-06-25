import React from 'react';
import feature1 from './images/feature1.png';
import { useState } from 'react';
import FAQ from './images/FAQ.png';
import { Link, useNavigate } from 'react-router-dom';
import f1 from './images/f1.jpeg';
import f2 from './images/f2.jpeg';
import f3 from './images/f3.jpeg';
import f4 from './images/f4.jpeg';
import f5 from './images/f5.jpeg';
import f6 from './images/f6.jpeg';
import u1 from './images/u1.jpeg';
import u2 from './images/u2.jpeg';
import u3 from './images/u3.jpeg';
import u4 from './images/u4.jpeg';

function MainSection() {
  const isLoggedIn = localStorage.getItem('token') !== null;

  return (
    <section
      id="main"
      style={{
        backgroundImage: `url(${feature1})`,
        backgroundRepeat: 'no-repeat',
        height: '90vh',
        width: '100%',
        backgroundSize: 'cover',
        padding: '80px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
      }}
    >
      <br />
      <h4 style={{ paddingBottom: '15px' }}>Welcome to AI Whisperer</h4>
      <h2 style={{ color: '#088178' }}>
        Unleashing the Power of <br />
        Text Analysis and AI Detection
      </h2>
      <p>
        AI Whisperer is your one-stop solution for advanced text analysis and AI
        detection.
        <br />
        Whether you're a student, content creator, or business professional, our
        platform helps you understand
        <br />
        and improve your documents like never before.
      </p>
      {/* Conditionally render Link based on login status */}
      {isLoggedIn ? (
        <Link
          to="/aicontent"  // Replace with the appropriate route for AI content
          style={{
            backgroundColor: '#088178',
            color: 'whitesmoke',
            border: '0',
            padding: '14px 5px',
            textAlign: 'center',
            textDecoration: 'none',
            fontSize: '1em',
            display: 'inline-block',
            width: '22%',
            whiteSpace: 'nowrap',
            borderRadius: '20px',
          }}
        >
          AI Content
        </Link>
      ) : (
        <Link
          to="/signup"
          style={{
            backgroundColor: '#088178',
            color: 'whitesmoke',
            border: '0',
            padding: '14px 5px',
            textAlign: 'center',
            textDecoration: 'none',
            fontSize: '1em',
            display: 'inline-block',
            width: '22%',
            whiteSpace: 'nowrap',
            borderRadius: '20px',
          }}
        >
          Get Started
        </Link>
      )}
    </section>
  );
}


function FeatureSection() {
  return (
    <section style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', gap: '20px', marginTop: '20px' }}>

      {/* Heading */}
      <h2 style={{ width: '100%', textAlign: 'center', marginBottom: '30px', color: '#088178' }}>Special Features of AI Whisperer</h2>

      {/* Feature 1 */}
      <div style={{ width: 'calc(33.33% - 20px)', backgroundColor: '#ffffff', padding: '20px', borderRadius: '8px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', textAlign: 'center', marginBottom: '20px', border: '1px solid #ddd' }}>
        <img src={f6} alt="Feature 1" style={{ maxWidth: '100%', borderRadius: '8px', marginBottom: '15px' }} />
        <p style={{ fontSize: '14px', lineHeight: '1.6', color: '#666666', marginBottom: '0' }}>This project aims to mitigate the risk associated with the over-reliance of users on AI-generated content by differentiating between text generated by artificial intelligence systems and text authored by humans.</p>
      </div>

      {/* Feature 2 */}
      <div style={{ width: 'calc(33.33% - 20px)', backgroundColor: '#ffffff', padding: '20px', borderRadius: '8px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', textAlign: 'center', marginBottom: '20px', border: '1px solid #ddd' }}>
        <img src={f1} alt="Feature 2" style={{ maxWidth: '100%', borderRadius: '8px', marginBottom: '15px' }} />
        <p style={{ fontSize: '14px', lineHeight: '1.6', color: '#666666', marginBottom: '0' }}>Our method includes linguistic pattern analysis, syntactic structure examination, semantic coherence assessment, and stylistic inconsistency detection in the text, based mostly on Natural Language Processing (NLP) techniques.</p>
      </div>

      {/* Feature 3 */}
      <div style={{ width: 'calc(33.33% - 20px)', backgroundColor: '#ffffff', padding: '20px', borderRadius: '8px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', textAlign: 'center', marginBottom: '20px', border: '1px solid #ddd' }}>
        <img src={f2} alt="Feature 3" style={{ maxWidth: '100%', borderRadius: '8px', marginBottom: '15px' }} />
        <p style={{ fontSize: '14px', lineHeight: '1.6', color: '#666666', marginBottom: '0' }}>We utilize cutting-edge NLP techniques such as Word Embedding, Part-of-Speech Tagging, Recurrent Neural Networks (RNNs), and Transformer-based Models like BERT and GPT to improve openness and confidence in online content moderation.</p>
      </div>

      {/* Feature 4 */}
      <div style={{ width: 'calc(33.33% - 20px)', backgroundColor: '#ffffff', padding: '20px', borderRadius: '8px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', textAlign: 'center', marginBottom: '20px', border: '1px solid #ddd' }}>
        <img src={f3} alt="Feature 4" style={{ maxWidth: '100%', borderRadius: '8px', marginBottom: '15px' }} />
        <p style={{ fontSize: '14px', lineHeight: '1.6', color: '#666666', marginBottom: '0' }}>This system encourages users to utilize AI-generated content responsibly and rely less on AI and more on their creativity, thereby promoting ethical AI use.</p>
      </div>

      {/* Feature 5 */}
      <div style={{ width: 'calc(33.33% - 20px)', backgroundColor: '#ffffff', padding: '20px', borderRadius: '8px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', textAlign: 'center', marginBottom: '20px', border: '1px solid #ddd' }}>
        <img src={f4} alt="Feature 5" style={{ maxWidth: '100%', borderRadius: '8px', marginBottom: '15px' }} />
        <p style={{ fontSize: '14px', lineHeight: '1.6', color: '#666666', marginBottom: '0' }}>The project proposal outlines a strategic approach for creating advanced algorithms and techniques designed to distinguish between text written by humans and text generated by artificial intelligence systems.</p>
      </div>

      {/* Feature 6 */}
      <div style={{ width: 'calc(33.33% - 20px)', backgroundColor: '#ffffff', padding: '20px', borderRadius: '8px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', textAlign: 'center', marginBottom: '20px', border: '1px solid #ddd' }}>
        <img src={f5} alt="Feature 6" style={{ maxWidth: '100%', borderRadius: '8px', marginBottom: '15px' }} />
        <p style={{ fontSize: '14px', lineHeight: '1.6', color: '#666666', marginBottom: '0' }}>By leveraging NLP techniques and machine learning models, this system aims to reduce the risks associated with the spread of AI-generated text while enhancing transparency and trust in online content.</p>
      </div>

    </section>
  );
}
function FAQSection() {
  const faqs = [
    {
      question: 'What is AI Whisperer?',
      answer: 'AI Whisperer is a platform that leverages advanced text analysis and AI detection techniques to help users understand and improve their documents.',
    },
    {
      question: 'How can AI Whisperer benefit me?',
      answer: 'AI Whisperer benefits students, content creators, and business professionals by providing tools to analyze text, detect AI-generated content, and enhance document quality.',
    },
    {
      question: 'What technologies does AI Whisperer use?',
      answer: 'AI Whisperer utilizes Natural Language Processing (NLP) techniques such as Word Embedding, Part-of-Speech Tagging, and machine learning models like BERT and GPT.',
    },
    {
      question: 'Is AI Whisperer suitable for businesses?',
      answer: 'Yes, AI Whisperer provides solutions for businesses to enhance content moderation, ensure AI-generated content is used responsibly, and promote ethical AI practices.',
    },
    {
      question: 'How do I get started with AI Whisperer?',
      answer: 'You can get started with AI Whisperer by signing up on our platform. Explore our features and tools to analyze and enhance your documents.',
    },
    {
      question: 'Can I integrate AI Whisperer with other applications?',
      answer: 'Yes, AI Whisperer offers integration capabilities to streamline workflows and enhance text analysis processes across various applications.',
    },
    {
      question: 'Is AI Whisperer secure?',
      answer: 'AI Whisperer prioritizes data security and implements measures to protect user information and ensure secure usage of AI detection and text analysis tools.',
    },
  ];

  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleFAQ = (index) => {
    setExpandedIndex(index === expandedIndex ? null : index);
  };

  return (
    <section style={{ display: 'flex', justifyContent: 'space-between', padding: '20px ', backgroundColor: '#3bb19b' }}>
      <div style={{ flex: '1', paddingRight: '20px' }}>
        {/* <h2 style={{ color: '#088178', marginBottom: '30px', textAlign: 'left' ,  whiteSpace: 'nowrap'}}>Frequently Asked Questions</h2> */}
        <img src={FAQ} alt="faq" />
      </div>
      <div style={{ flex: '1', paddingLeft: '20px' }}>
        {faqs.map((faq, index) => (
          <div key={index} style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '8px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', marginBottom: '20px', cursor: 'pointer', textAlign: 'right' }} onClick={() => toggleFAQ(index)}>
            <h3 style={{ fontSize: '18px', color: '#088178', marginBottom: '10px', textAlign: 'left' }}>{faq.question}</h3>
            {expandedIndex === index && (
              <p style={{ fontSize: '14px', lineHeight: '1.6', color: '#666666', marginBottom: '0', textAlign: 'left' }}>{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
function Usecase() {
  return (
    <section style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '20px' }}>

      {/* Use Case Study 1 */}
      <div style={{ display: 'flex', flexDirection: 'row', backgroundColor: '#ffffff', padding: '20px', borderRadius: '8px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>

        <div style={{ flex: '1', textAlign: 'center' }}>
          <img src={u1} alt="Project 1" style={{ maxWidth: '75%', height: 'auto', borderRadius: '8px', objectFit: "fill", marginLeft: '50px' }} />
        </div>

        <div style={{ flex: '1', marginLeft: '20px' }}>
          <h2 style={{ color: '#088178', marginBottom: '10px' }}>Educational Institutes</h2>
          <p style={{ fontSize: '14px', lineHeight: '1.6', color: '#666666', marginBottom: '10px' }}>
            Educational institutions can greatly benefit from our advanced text analysis platform, *AI Whisperer*. Teachers and professors can use the system to analyze student submissions for originality and content quality. By detecting AI-generated text, educators can ensure academic integrity and encourage students to produce authentic work. The platform's ability to highlight AI-generated sections and provide detailed reports makes it an invaluable tool for grading and providing feedback.            </p>
          <p style={{ fontSize: '14px', lineHeight: '1.6', color: '#666666', marginBottom: '10px' }}>
            Moreover, the system helps educators identify areas where students might need additional support or resources, fostering a deeper understanding of the material. Schools and universities can integrate AI Whisperer into their learning management systems to streamline the submission and review process, making it easier to manage large volumes of assignments. This integration not only saves time but also enhances the overall educational experience by promoting transparency and accountability in academic work.            </p>
          <p style={{ fontSize: '14px', lineHeight: '1.6', color: '#666666', marginBottom: '10px' }}>
            The platform's ability to highlight AI-generated sections and provide detailed reports makes it an invaluable tool for grading and providing feedback.
          </p>
        </div>
      </div>

      {/* Use Case Study 2 */}
      <div style={{ display: 'flex', flexDirection: 'row', backgroundColor: '#ffffff', padding: '20px', borderRadius: '8px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>

        <div style={{ flex: '1', marginRight: '20px' }}>
          <h2 style={{ color: '#088178', marginBottom: '10px' }}>Research Projects</h2>
          <p style={{ fontSize: '14px', lineHeight: '1.6', color: '#666666', marginBottom: '10px' }}>
            In the realm of academic and scientific research, ensuring the authenticity and quality of research papers is crucial. Researchers face the constant challenge of maintaining originality while adhering to high standards of scholarly writing. Our text analysis platform provides a robust solution to these challenges, empowering researchers to verify the originality of their work and detect any AI-generated content that might compromise the integrity of their papers.            </p>
          <p style={{ fontSize: '14px', lineHeight: '1.6', color: '#666666', marginBottom: '10px' }}>
            Our platform offers comprehensive analyses of word and sentence structures, enabling researchers to refine their manuscripts for clarity and coherence.          </p>
          <p style={{ fontSize: '14px', lineHeight: '1.6', color: '#666666', marginBottom: '10px' }}>
            Maintaining the credibility of research publications is paramount, and our platform plays a significant role in this aspect. It assists in the peer review process by offering detailed reports that reviewers can use to assess the originality and quality of submissions. By providing these insights, our text analysis tools help uphold the integrity of academic journals and contribute to the advancement of scientific knowledge.            </p>
        </div>

        <div style={{ flex: '1', textAlign: 'center' }}>
          <img src={u2} alt="Project 2" style={{ maxWidth: '75%', height: 'auto', borderRadius: '8px', objectFit: "fill", marginLeft: '50px' }} />
        </div>
      </div>

      {/* Use Case Study 3 */}
      <div style={{ display: 'flex', flexDirection: 'row', backgroundColor: '#ffffff', padding: '20px', borderRadius: '8px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>

        <div style={{ flex: '1', textAlign: 'center' }}>
          <img src={u3} alt="Project 1" style={{ maxWidth: '75%', height: 'auto', borderRadius: '8px', objectFit: "fill", marginLeft: '50px' }} />
        </div>

        <div style={{ flex: '1', marginLeft: '20px' }}>
          <h2 style={{ color: '#088178', marginBottom: '10px' }}>Journalism and Media</h2>
          <p style={{ fontSize: '14px', lineHeight: '1.6', color: '#666666', marginBottom: '10px' }}>
            Journalists and media organizations can utilize our platform to verify the authenticity of articles and reports. In an era where misinformation can easily spread, having a tool to detect AI-generated text ensures the credibility of published content. This capability is crucial for maintaining trust with readers and upholding the integrity of news reporting.             </p>
          <p style={{ fontSize: '14px', lineHeight: '1.6', color: '#666666', marginBottom: '10px' }}>
            Additionally, our platform aids in editing and refining articles by providing detailed word and sentence counts. This feature helps journalists enhance the clarity and readability of their work, resulting in higher quality journalism. By leveraging these tools, media organizations can produce more accurate and polished content, reinforcing their reputation as reliable sources of information.             </p>
          <p style={{ fontSize: '14px', lineHeight: '1.6', color: '#666666', marginBottom: '10px' }}>
            The platform also helps in editing and refining articles by providing detailed word and sentence counts, enhancing the overall quality of the journalism.            </p>
        </div>
      </div>

      {/* Use Case Study 4 */}
      <div style={{ display: 'flex', flexDirection: 'row', backgroundColor: '#ffffff', padding: '20px', borderRadius: '8px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>

        <div style={{ flex: '1', marginRight: '20px' }}>
          <h2 style={{ color: '#088178', marginBottom: '10px' }}>Content Creation and Marketing</h2>
          <p style={{ fontSize: '14px', lineHeight: '1.6', color: '#666666', marginBottom: '10px' }}>
            For content creators and marketers, producing original and engaging content is key to capturing audience interest. In today's competitive digital landscape, standing out requires a distinctive voice and compelling storytelling. Our text analysis platform assists creators by thoroughly analyzing drafts to ensure they are free from AI-generated segments, helping them maintain their unique voice and style.  </p>
          <p style={{ fontSize: '14px', lineHeight: '1.6', color: '#666666', marginBottom: '10px' }}>
            Maintaining originality is crucial for content creators who strive to build a loyal audience. By leveraging our platform, creators can confidently produce authentic content that resonates with their followers. This not only enhances their personal brand but also fosters trust and credibility with their audience.   </p>
          <p style={{ fontSize: '14px', lineHeight: '1.6', color: '#666666', marginBottom: '10px' }}>
            For marketers, our platform provides detailed reports to optimize content for engagement and SEO performance. By analyzing word and sentence structures, marketers can craft impactful, search engine-friendly messages. These insights help ensure content stands out, drives traffic, and achieves higher engagement rates, leading to more successful marketing campaigns.</p>          </div>

        <div style={{ flex: '1', textAlign: 'center' }}>
          <img src={u4} alt="Project 2" style={{ maxWidth: '75%', height: 'auto', borderRadius: '8px', objectFit: "fill", marginLeft: '50px' }} />
        </div>
      </div>




    </section>
  );
}




function Home() {
  return (
    <div>
      <MainSection />
      <FeatureSection />
      <FAQSection />
      <Usecase />
    </div>
  );
}

export default Home;
