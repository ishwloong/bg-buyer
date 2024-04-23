import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { FILTER_BY_PRICE, FILTER_PRICE_DEFAULT } from "@/lib/constants";
import { Aggregation } from "@/types/product";

type Props = { aggregations: Aggregation[] };

const FilterLeft = ({
  aggregations,
  searchParams,
}: Props & {
  searchParams?: { [key: string]: string | string[] | undefined };
}) => {
  return (
    <Accordion
      type="multiple"
      className="w-[312px]"
      defaultValue={[...aggregations.map((item) => item.name), "Price"]}
    >
      {aggregations.map((aggregation) => (
        <AccordionItem
          key={aggregation.name}
          value={aggregation.name}
          className="w-[312px] py-[30px] px-[22px] border border-t-0 first-of-type:border-t"
        >
          <AccordionTrigger className="p-0 hover:no-underline font-medium">
            <h4>{aggregation.name}</h4>
          </AccordionTrigger>
          <AccordionContent className="mt-5 max-h-[300px] overflow-auto">
            {aggregation.values.map((option) => (
              <div key={option.id} className="flex gap-3 items-center">
                <Checkbox
                  className="data-[state=checked]:bg-[var(--color-primary)] data-[state=checked]:border-[var(--color-primary)]"
                  id={option.value}
                />
                <label htmlFor={option.value}>{option.name}</label>
              </div>
            ))}
          </AccordionContent>
        </AccordionItem>
      ))}
      <AccordionItem
        key={"Price"}
        value={"Price"}
        className="w-[312px] py-[30px] px-[22px] border border-t-0 first-of-type:border-t"
      >
        <AccordionTrigger className="p-0 hover:no-underline font-medium">
          <h4>Price</h4>
        </AccordionTrigger>
        <AccordionContent className="mt-5 max-h-[300px] overflow-auto">
          <RadioGroup defaultValue={FILTER_PRICE_DEFAULT}>
            {FILTER_BY_PRICE.map((range) => (
              <div key={range.id} className="flex gap-3 items-center">
                <RadioGroupItem value={range.id} id={range.id} />
                <label htmlFor={range.id}>{range.name}</label>
              </div>
            ))}
          </RadioGroup>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default FilterLeft;
