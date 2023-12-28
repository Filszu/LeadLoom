import { TQAbox, TQA } from '@/types';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';

const QueryAnswearBox = ({qas}: {qas:TQAbox}) => {

    
    return <Accordion type="single" collapsible>
        
        {qas.map((qa) => (
            <QA {...qa} key={`key-${qa.question}`} />
        ))}
       
      
    
    </Accordion>;
};

const QA = (qa: TQA) => {
    return (
        <AccordionItem value={`item-${qa.question}`}>
            <AccordionTrigger>{qa.question}</AccordionTrigger>
            <AccordionContent>
                {qa.answer}
            </AccordionContent>
        </AccordionItem>
    );
};
export default QueryAnswearBox;
