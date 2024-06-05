import { Accordion } from "flowbite-react";

const AccordionComponent = () => {
  return (
    <div className="max-w-screen-2xl mx-auto">
      <h3 className="text-center text-5xl font-bold py-20">Common Questions</h3>
      <Accordion collapseAll>
        <Accordion.Panel>
          <Accordion.Title>Q. What are your delivery hours?</Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              We deliver from 7.30 am to 11 pm every day. You can choose from
              available slots to find something that is convenient for you.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>Q. What is your policy on refunds?</Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              We offer a refund or return policy of seven (7) days on most
              unopened or unspoilt packaged products. For perishable products
              such as milk, fruits, and fresh vegetables, we have a 1 (one) day
              return policy. Diaper items must be returned for refunds before
              10% or 3 pieces (whichever comes first) have been used. Certain
              products; Face Mask, Disposable Vinyl Gloves, Alcohol Pads, and
              Covid Testing Kits are not acceptable for refund or return either
              opened or unopened.
            </p>
          </Accordion.Content>
        </Accordion.Panel>

        <Accordion.Panel>
          <Accordion.Title>Q. What about the prices?</Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              Our prices are our own but we try our best to offer them to you at
              or below market prices. Our prices are the same as the local
              market and we are working hard to get them even lower! If you feel
              that any product is priced unfairly, please let us know.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
      </Accordion>
    </div>
  );
};

export default AccordionComponent;
