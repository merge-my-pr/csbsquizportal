import React from 'react'
import { useState ,useEffect} from 'react';
import './QuizQuestion.css'

export default function QuizQuestions() {


    const [form,setForm] = useState({});
    const [isStudentLogin,setIsStudentLogin]=useState(false);
    const [score, setScore] = useState(0);
    const [submittedmessage, setSubmittedmessage] = useState("");
    const [answers, setAnswers] = useState({});
    const [isQuizSubmitted,setIsQuizSubmitted] = useState(false);



    useEffect(() => {
        const storedIsStudentLogin = localStorage.getItem('isStudentLogin');
        const storedForm = localStorage.getItem('form');
      
        if (storedIsStudentLogin) {
          setIsStudentLogin(JSON.parse(storedIsStudentLogin));
        }
      
        if (storedForm) {
          setForm(JSON.parse(storedForm));
        }
      }, []);
      
      useEffect(() => {
        localStorage.setItem('isStudentLogin', JSON.stringify(isStudentLogin));
        localStorage.setItem('form', JSON.stringify(form));
      }, [isStudentLogin, form]);

    
    const HandleForm = (e) =>{
        // console.log(e.target.value,e.target.name);

        setForm({
            ...form,
            [e.target.name]:e.target.value
        });
    }



    const handleStudentData=()=>{
       

            setIsStudentLogin(true)
    }



    const handleAnswer = (e) => {
        setAnswers({
          ...answers,
          [e.target.name]: e.target.value,
        });
      };
    



      const submitQuiz=()=>{
          
          const correctAnswerForEachQuestion = {
              q1: 'B',
              q2: 'B',
              q3: 'B',
              q4: 'C',
              q5: 'A',
              q6: 'B',
              q7: 'B',
              q8: 'D',
              q9: 'B',
              q10: 'B',
              q11: 'A',
              q12: 'C',
              q13: 'C',
              q14: 'B',
              q15: 'B',
              q16: 'B',
              q17: 'B',
              q18: 'D',
              q19: 'B',
              q20: 'B', 
              q21: 'B',
              q22: 'A',
              q23: 'A',
              q24: 'D',
              q25: 'C',
              q26: 'A',
              q27: 'B',
              q28: 'A',
              q29: 'B',
              q30: 'C',

              
              
            };
        let currentscore = 0;
          Object.keys(answers).forEach((question) => {
            if (answers[question] === correctAnswerForEachQuestion[question]) {
                currentscore++;
            }
          });
          setScore(currentscore)
        
          const formData = {
            name: form.name,
            department: form.department,
            score: currentscore,
          };

          fetch('https://csbsquizserver-production-ba05.up.railway.app/api/submit', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          })
            .then((response) => response.json())
            .then((data) => setSubmittedmessage(data))
            .catch((error) => console.error(error));
            
            
          setIsQuizSubmitted(true)
      }


  return (
    <div>
              <center>
{
    !isStudentLogin?
    <div>
        <form onSubmit={handleStudentData}>

        <h2>SIP English Quiz Form</h2>

        <label for="name">Student Name:</label>
        <input type="text" id="name" name="name" placeholder="Enter your name" onChange={HandleForm} required/><br />

        <label for="department">Department:</label>
        <input type="text" id="department"name="department" placeholder="Enter your department" onChange={HandleForm} required/>
        <br />
        <input type="submit" value="Lets Go" />
        </form>   
    </div> :
    <div>

        <div class="container">
       
       <div class="quiz-section">
        <div class="user-information">

        <p>NAME: {form.name}</p>
        <p>DEPARTMENT: {form.department}</p>
        </div>

           <h3>Answer the Quiz:</h3>

           <div class="question">
               <h4>1. What is the main purpose of a formal letter?</h4> <br />
               <label><input type="radio" name="q1" value="A" onChange={handleAnswer} />To chat with friends</label>
               <label><input type="radio" name="q1" value="B" onChange={handleAnswer} />To request or provide information</label>
               <label><input type="radio" name="q1" value="C" onChange={handleAnswer} />To send a casual update</label>
               <label><input type="radio" name="q1" value="D" onChange={handleAnswer} />To write a story</label>
           </div>

           <div class="question">
               <h4>2. What elements should be included in the header of a formal letter?</h4> <br />
               <label><input type="radio" name="q2" value="A" onChange={handleAnswer} />Recipient's name, date, and subject</label>
               <label><input type="radio" name="q2" value="B" onChange={handleAnswer} />Sender’s address and date</label>
               <label><input type="radio" name="q2" value="C" onChange={handleAnswer} />Salutation and closing</label>
               <label><input type="radio" name="q2" value="D" onChange={handleAnswer} /> Signature and contact details</label>
           </div>

           <div class="question">
               <h4>3. How should you address the recipient in a formal letter?</h4> <br />
               <label><input type="radio" name="q3" value="A" onChange={handleAnswer} />Hey [Recipient’s Name]</label>
               <label><input type="radio" name="q3" value="B" onChange={handleAnswer} />Dear  [Recipient’s Name]</label>
               <label><input type="radio" name="q3" value="C" onChange={handleAnswer} />Hi [Recipient’s Name]</label>
               <label><input type="radio" name="q3" value="D" onChange={handleAnswer} />Hello [Recipient’s Name]</label>
           </div>


           <div class="question">
               <h4>4. What is the purpose of the salutation in a formal letter?</h4> <br />
               <label><input type="radio" name="q4" value="A" onChange={handleAnswer} />Sender’s address and date</label>
               <label><input type="radio" name="q4" value="B" onChange={handleAnswer} />Salutation and closing</label>
               <label><input type="radio" name="q4" value="C" onChange={handleAnswer} />Signature and contact details</label>
           </div>

           <div class="question">
               <h4>5. How should you close a formal letter? </h4> <br />
               <label><input type="radio" name="q5" value="A" onChange={handleAnswer} />Yours sincerely</label>
               <label><input type="radio" name="q5" value="B" onChange={handleAnswer} />Cheers</label>
               <label><input type="radio" name="q5" value="C" onChange={handleAnswer} />Best</label>
               <label><input type="radio" name="q5" value="D" onChange={handleAnswer} />See you</label>
           </div>

           <div class="question">
               <h4>6. What is the role of the subject line in a formal letter?</h4> <br />
               <label><input type="radio" name="q6" value="A" onChange={handleAnswer} />To list the sender's credentials</label>
               <label><input type="radio" name="q6" value="B" onChange={handleAnswer} />To state the letter’s purpose</label>
               <label><input type="radio" name="q6" value="C" onChange={handleAnswer} />To close the letter</label>
               <label><input type="radio" name="q6" value="D" onChange={handleAnswer} />To include a greeting</label>
           </div>

           <div class="question">
               <h4>7. What information should be included in the body of a formal letter?</h4> <br />
               <label><input type="radio" name="q7" value="A" onChange={handleAnswer} />Personal anecdotes</label>
               <label><input type="radio" name="q7" value="B" onChange={handleAnswer} />Reasons for writing and relevant details</label>
               <label><input type="radio" name="q7" value="C" onChange={handleAnswer} />Informal jokes</label>
               <label><input type="radio" name="q7" value="D" onChange={handleAnswer} />Unrelated information</label>
           </div>

           <div class="question">
               <h4>8. What is the importance of a formal tone in letter writing?</h4> <br />
               <label><input type="radio" name="q8" value="A" onChange={handleAnswer} />To appear casual and friendly</label>
               <label><input type="radio" name="q8" value="B" onChange={handleAnswer} />To ensure professionalism and respect</label>
               <label><input type="radio" name="q8" value="C" onChange={handleAnswer} />To be humorous</label>
               <label><input type="radio" name="q8" value="D" onChange={handleAnswer} />To confuse the recipient</label>
           </div>

           <div class="question">
               <h4>9. How should you sign a formal letter?</h4> <br />
               <label><input type="radio" name="q9" value="A" onChange={handleAnswer} />Using a nickname</label>
               <label><input type="radio" name="q9" value="B" onChange={handleAnswer} />With your full name</label>
               <label><input type="radio" name="q9" value="C" onChange={handleAnswer} />With just your first name</label>
               <label><input type="radio" name="q9" value="D" onChange={handleAnswer} />Using an informal sign-off</label>
           </div>

           <div class="question">
               <h4>10. When sending a letter electronically, which format is often used?</h4> <br />
               <label><input type="radio" name="q10" value="A" onChange={handleAnswer} />Formal letter format</label>
               <label><input type="radio" name="q10" value="B" onChange={handleAnswer} />Informal email format</label>
               <label><input type="radio" name="q10" value="C" onChange={handleAnswer} />Handwritten format</label>
               <label><input type="radio" name="q10" value="D" onChange={handleAnswer} />Business letter format</label>
           </div>
           <div class="question">
               <h4>11.What information is often not required in informal letters? </h4> <br />
               <label><input type="radio" name="q11" value="A" onChange={handleAnswer} />Date</label>
               <label><input type="radio" name="q11" value="B" onChange={handleAnswer} />Subject line</label>
               <label><input type="radio" name="q11" value="C" onChange={handleAnswer} />Greeting</label>
               <label><input type="radio" name="q11" value="D" onChange={handleAnswer} />Closing statemen</label>
           </div>
           <div class="question">
               <h4>12.What should be avoided in the tone of an informal letter?</h4> <br />
               <label><input type="radio" name="q12" value="A" onChange={handleAnswer} />Warmth</label>
               <label><input type="radio" name="q12" value="B" onChange={handleAnswer} />Humor</label>
               <label><input type="radio" name="q12" value="C" onChange={handleAnswer} />Formality</label>
               <label><input type="radio" name="q12" value="D" onChange={handleAnswer} />Personal touch</label>
           </div>

           <div class="question">
               <h4>13. What is typically omitted in informal letters but included in formal ones?</h4> <br />
               <label><input type="radio" name="q13" value="A" onChange={handleAnswer} />Salutation</label>
               <label><input type="radio" name="q13" value="B" onChange={handleAnswer} />Signature</label>
               <label><input type="radio" name="q13" value="C" onChange={handleAnswer} />Sender's address</label>
               <label><input type="radio" name="q13" value="D" onChange={handleAnswer} />Contact details</label>
           </div>
           <div class="question">
               <h4>14. Which element is usually included in both formal and informal letters?</h4> <br />
               <label><input type="radio" name="q14" value="A" onChange={handleAnswer} />Subject line</label>
               <label><input type="radio" name="q14" value="B" onChange={handleAnswer} />Signature</label>
               <label><input type="radio" name="q14" value="C" onChange={handleAnswer} />Formal title</label>
               <label><input type="radio" name="q14" value="D" onChange={handleAnswer} />Contact details</label>
           </div>

           <div class="question">
               <h4>15. What is the main difference between a formal and an informal letter?</h4> <br />
               <label><input type="radio" name="q15" value="A" onChange={handleAnswer} />The length</label>
               <label><input type="radio" name="q15" value="B" onChange={handleAnswer} />The tone and structure</label>
               <label><input type="radio" name="q15" value="C" onChange={handleAnswer} />The recipient’s address</label>
               <label><input type="radio" name="q15" value="D" onChange={handleAnswer} />The salutation</label>
           </div>
           <div class="question">
               <h4>16.Which of the following is a proper closing for an informal letter? </h4> <br />
               <label><input type="radio" name="q16" value="A" onChange={handleAnswer} />Yours truly</label>
               <label><input type="radio" name="q16" value="B" onChange={handleAnswer} />Best regards</label>
               <label><input type="radio" name="q16" value="C" onChange={handleAnswer} />Warmly</label>
               <label><input type="radio" name="q16" value="D" onChange={handleAnswer} />Yours faithfully</label>
           </div>

           <div class="question">
               <h4>17. What should be the length of an informal letter?</h4> <br />
               <label><input type="radio" name="q17" value="A" onChange={handleAnswer} />As brief as possible</label>
               <label><input type="radio" name="q17" value="B" onChange={handleAnswer} />As long as needed to convey the message</label>
               <label><input type="radio" name="q17" value="C" onChange={handleAnswer} />Exactly one page</label>
               <label><input type="radio" name="q17" value="D" onChange={handleAnswer} />No longer than a paragraph</label>
           </div>
           <div class="question">
               <h4>18.How does the content of an informal letter differ from a formal one? </h4> <br />
               <label><input type="radio" name="q18" value="A" onChange={handleAnswer} />It is more detailed and structured</label>
               <label><input type="radio" name="q18" value="B" onChange={handleAnswer} />It uses professional jargon</label>
               <label><input type="radio" name="q18" value="C" onChange={handleAnswer} />It includes formal requests and queries</label>
               <label><input type="radio" name="q18" value="D" onChange={handleAnswer} />It focuses on personal matters and is less structured</label>
           </div>
           <div class="question">
               <h4>19. In which scenario would you write an informal letter?</h4> <br />
               <label><input type="radio" name="q19" value="A" onChange={handleAnswer} />To request a business proposal</label>
               <label><input type="radio" name="q19" value="B" onChange={handleAnswer} />To invite a friend to a party</label>
               <label><input type="radio" name="q19" value="C" onChange={handleAnswer} />To file a complaint</label>
               <label><input type="radio" name="q19" value="D" onChange={handleAnswer} />To apply for a job</label>
           </div>
           <div class="question">
               <h4>20.What kind of paper is usually used for informal letters?</h4> <br />
               <label><input type="radio" name="q20" value="A" onChange={handleAnswer} />Official letterhead</label>
               <label><input type="radio" name="q20" value="B" onChange={handleAnswer} />Plain or decorative stationery</label>
               <label><input type="radio" name="q20" value="C" onChange={handleAnswer} />Business paper</label>
               <label><input type="radio" name="q20" value="D" onChange={handleAnswer} />Legal documents</label>
           </div>

           <div class="question">
               <h4>21.The salutation in a formal letter should be casual and friendly </h4> <br />
               <label><input type="radio" name="q21" value="A" onChange={handleAnswer} />True</label>
               <label><input type="radio" name="q21" value="B" onChange={handleAnswer} />False</label>
           </div>
           <div class="question">
               <h4>22. The sender’s address is often included in the header of a formal letter</h4> <br />
               <label><input type="radio" name="q22" value="A" onChange={handleAnswer} />True</label>
               <label><input type="radio" name="q22" value="B" onChange={handleAnswer} />False</label>
           </div>
           <div class="question">
               <h4>23. In both formal and informal letters, the recipient's address is typically placed at the top left corner of the letter</h4> <br />
               <label><input type="radio" name="q23" value="A" onChange={handleAnswer} />True</label>
               <label><input type="radio" name="q23" value="B" onChange={handleAnswer} />False</label>
           </div>
           <div class="question">
               <h4>24.What should you include in an apology letter to ensure it is effective? </h4> <br />
               <label><input type="radio" name="q24" value="A" onChange={handleAnswer} />An explanation of the mistake</label>
               <label><input type="radio" name="q24" value="B" onChange={handleAnswer} />A promise of future action</label>
               <label><input type="radio" name="q24" value="C" onChange={handleAnswer} />An offer of compensation</label>
               <label><input type="radio" name="q24" value="D" onChange={handleAnswer} />All of the above</label>
           </div>
           <div class="question">
               <h4>25.In a sales letter, what is the main objective?</h4> <br />
               <label><input type="radio" name="q25" value="A" onChange={handleAnswer} />To apologize for a service failure</label>
               <label><input type="radio" name="q25" value="B" onChange={handleAnswer} />To request a meeting</label>
               <label><input type="radio" name="q25" value="C" onChange={handleAnswer} />To persuade the reader to purchase a product or service</label>
               <label><input type="radio" name="q25" value="D" onChange={handleAnswer} />To report a business issue</label>
           </div>
           <div class="question">
               <h4>26. In an apology letter, which phrase is often used to express regret?</h4> <br />
               <label><input type="radio" name="q26" value="A" onChange={handleAnswer} />I'm sorry for any inconvenience</label>
               <label><input type="radio" name="q26" value="B" onChange={handleAnswer} />I hope you are well</label>
               <label><input type="radio" name="q26" value="C" onChange={handleAnswer} />Thank you for your time</label>
               <label><input type="radio" name="q26" value="D" onChange={handleAnswer} />Looking forward to your response</label>
           </div>
           <div class="question">
               <h4>27. What is the main purpose of an inquiry letter?</h4> <br />
               <label><input type="radio" name="q27" value="A" onChange={handleAnswer} />To complain about a product</label>
               <label><input type="radio" name="q27" value="B" onChange={handleAnswer} />To request information or clarification</label>
               <label><input type="radio" name="q27" value="C" onChange={handleAnswer} />To offer a job</label>
               <label><input type="radio" name="q27" value="D" onChange={handleAnswer} />To apologize for a mistake</label>
           </div>

           <div class="question">
               <h4>28. <pre>
       &nbsp;Heading <br />
       &nbsp;Date: <br />
       &nbsp;place: <br />
       &nbsp;From<br />
       &nbsp;&nbsp;[Your Address] <br />
       &nbsp;&nbsp;[City, State, ZIP Code]<br />
       &nbsp;&nbsp;[Email Address]<br />
       &nbsp;&nbsp;[Date]<br />
            To<br />
            &nbsp; &nbsp;[Recipient's Name] <br />
            &nbsp; &nbsp;[Recipient's Title] <br />
            &nbsp; &nbsp;[Company/Organization Name] <br />
            &nbsp; &nbsp;[Address] <br />
            &nbsp; &nbsp;[City, State, ZIP Code] <br />
            Dear [Recipient's Name], <br />
            Sub: [body of letter] <br />
            Sincerely, <br />
            [Your Name] <br />
            [Your Position] <br />
            [Your Company/Organization Name] <br />
</pre>
 </h4><br />
               <label><input type="radio" name="q28" value="A" onChange={handleAnswer} />Formal letter</label>
               <label><input type="radio" name="q28" value="B" onChange={handleAnswer} />InFormal letter</label>
           </div>
           <div class="question">
               <h4>29. <pre>

[Your Address] <br />
[City, State, ZIP Code] <br />
[Date] <br />
Hi [Friend's Name], <br />
[ body of letter] <br />
Best, <br />
[Your Name] <br />
               </pre>

 </h4> <br />
               <label><input type="radio" name="q29" value="A" onChange={handleAnswer} />Formal letter</label>
               <label><input type="radio" name="q29" value="B" onChange={handleAnswer} />InFormal letter</label>
           </div>

           <div class="question">
               <h4>30. I am writing to express my dissatisfaction with the recent purchase I made from your store. The product I received was damaged and does not match the description on your website. I would appreciate it if you could arrange for a replacement or a full refund at your earliest convenience.By the body of the letter , tell the type of letter?
               </h4> <br />
               <label><input type="radio" name="30" value="A" onChange={handleAnswer} />Inquiry Letter</label>
               <label><input type="radio" name="30" value="B" onChange={handleAnswer} />Business Letter</label>
               <label><input type="radio" name="30" value="C" onChange={handleAnswer} />Complaint Letter</label>
               <label><input type="radio" name="30" value="D" onChange={handleAnswer} />Apology letter</label>
           </div>

        {/* <div>
            {score}
        </div> */}
        {   
         !isQuizSubmitted?
            <div>
                <button type="button" onClick={submitQuiz}>Submit Quiz</button>
            </div>
            :
            <div>
                <p>{submittedmessage.message}</p>
            </div>
        }
           
       </div>
   </div>
    </div>
}
     
        </center>

    </div>
  )
}
