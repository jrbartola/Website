import * as React from 'react';

import {
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from 'react-accessible-accordion';

interface ResumeAccordionSectionProps {
  heading: string;
  iconClass: string;
}

const ResumeAccordionSection = ({
  heading,
  iconClass,
  children,
}: React.PropsWithChildren<ResumeAccordionSectionProps>) => {
  return (
    <AccordionItem>
      <AccordionItemHeading>
        <AccordionItemButton>
          <h3 style={{ display: 'inline-block', position: 'relative', top: 4 }}>
            <i className={`fas ${iconClass}`}></i> {heading}
          </h3>
        </AccordionItemButton>
      </AccordionItemHeading>
      <AccordionItemPanel>{children}</AccordionItemPanel>
    </AccordionItem>
  );
};

export default ResumeAccordionSection;
