import React from "react";
import Layout from "@layout/default";

import FAQList from "@utils/faq";

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel
} from "react-accessible-accordion";

import "@styles/pages/faq.scss";

const FAQ = props => {
  return (
    <React.Fragment>
      <Layout className="kz-faq-page" title="FAQ | Kenzie Academy Brazil">
        <div className="kz-section">
          <div className="container">
            <div className="columns">
              <div className="column has-text-centered">
                <h3 className="kz-section-head-title">Perguntas frequentes</h3>
              </div>
            </div>

            {FAQList.map(({ title, text }, index) => {
              return (
                <Accordion
                  allowMultipleExpanded={true}
                  allowZeroExpanded={true}
                  key={index}
                >
                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>{title}</AccordionItemButton>
                    </AccordionItemHeading>

                    <AccordionItemPanel>
                      <p dangerouslySetInnerHTML={{ __html: text }} />
                    </AccordionItemPanel>
                  </AccordionItem>
                </Accordion>
              );
            })}
          </div>
        </div>
      </Layout>
    </React.Fragment>
  );
};

export default FAQ;