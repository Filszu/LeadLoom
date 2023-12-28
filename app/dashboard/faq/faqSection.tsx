import QueryAnswearBox from "@/components/ui/custom/queryAnswerBox";
import { TQAbox } from "@/types";



const FaqSection = () => {
    const faq:TQAbox = [
        {
            question: 'What is LeadLoom?',
            answer: 'LeadLoom is the collection of free to play games that rewards🏆 you for playing🕹️. You can play games, complete tasks and earn rewards.🏅',
        },
        {
            question: "How do I create a new campaign in Leadloom?",
            answer: "You can create a new campaign by navigating to the 'Campaigns' tab and clicking on the 'Create New Campaign' button."
          },
          {
            question: "How do I add a new contact to my Leadloom account?",
            answer: "You can add a new contact by going to the 'Contacts' tab and clicking on the 'Add New Contact' button."
          },
          {
            question: "What should I do if my campaign is not sending emails?",
            answer: "If your campaign is not sending emails, please check your email settings and make sure that your SMTP settings are correctly configured."
          },
          {
            question: "How do I cancel my Leadloom subscription?",
            answer: "You can cancel your Leadloom subscription from the 'Subscription' section in your account settings."
          }
    ];
    return (
        <section className="mb-4  mt-4 flex flex-col gap-4">
            <QueryAnswearBox qas={faq}/>
        </section>
    );
};

export default FaqSection;
