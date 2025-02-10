import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function AccordionItems() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger className="lg:text-[16px]">Como posso acessar o curso?</AccordionTrigger>
        <AccordionContent>
          Após a confirmação da compra, o curso será enviado diretamente para o seu e-mail. Caso prefira, também pode solicitá-lo por meio dos seguintes contatos:
          <p className="mt-4">
            <strong>WhatsApp:</strong> (35) 99911-8606
          </p>
          <p className="mt-2">
          <strong>Discord:</strong> Andriel Henrique#7626.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger className="lg:text-[16px]">Qual é o período de acesso ao curso?</AccordionTrigger>
        <AccordionContent>
          O acesso ao curso é <strong>vitalício</strong>. Ao adquiri-lo, você poderá acessá-lo permanentemente.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger className="lg:text-[16px]">Qual é a política de garantia do curso?</AccordionTrigger>
        <AccordionContent>
          De acordo com o <strong>Código de Defesa do Consumidor (CDC)</strong>, você tem um prazo de <strong>7 dias</strong> para solicitar o reembolso após a compra.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
