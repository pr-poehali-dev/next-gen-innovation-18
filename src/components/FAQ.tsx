import { useState } from "react"
import { Plus } from "lucide-react"

const faqs = [
  {
    question: "Как рассчитывается стоимость работ?",
    answer:
      "Стоимость рассчитывается за квадратный метр и зависит от типа работ, состояния поверхности и объёма. Выезд на замер бесплатный — после осмотра объекта выдаём точную смету без скрытых наценок.",
  },
  {
    question: "Сколько времени занимают работы?",
    answer:
      "Машинная штукатурка квартиры 60–80 м² занимает 3–5 дней. Ручная штукатурка и шпаклёвка — немного дольше, в зависимости от сложности. Точные сроки фиксируем в договоре.",
  },
  {
    question: "Нужно ли мне покупать материалы самому?",
    answer:
      "Нет, всё необходимое привозим сами. Работаем с профессиональными смесями Knauf, Волма, Ceresit. Если у вас уже куплены материалы — можем работать с ними, предварительно проверим их качество.",
  },
  {
    question: "Работаете ли вы в новостройках?",
    answer:
      "Да, это одно из основных направлений. Выполняем штукатурку стен и потолков в новых квартирах под чистовую отделку — быстро и в срок, что важно при сдаче объектов.",
  },
  {
    question: "Даёте ли вы гарантию?",
    answer:
      "Да, даём письменную гарантию на все виды работ. Если в гарантийный период возникнут трещины или отслоения по нашей вине — приедем и устраним бесплатно.",
  },
  {
    question: "Как оставить заявку?",
    answer:
      "Позвоните нам или напишите — договоримся об удобном времени выезда на замер. Замер бесплатный, смета выдаётся в день осмотра. Работы начинаем после подписания договора и внесения аванса.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 md:py-29">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mb-16">
          <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6">Вопросы</p>
          <h2 className="text-6xl font-medium leading-[1.15] tracking-tight mb-6 text-balance lg:text-7xl">
            Частые вопросы
          </h2>
        </div>

        <div>
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-border">
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full py-6 flex items-start justify-between gap-6 text-left group"
              >
                <span className="text-lg font-medium text-foreground transition-colors group-hover:text-foreground/70">
                  {faq.question}
                </span>
                <Plus
                  className={`w-6 h-6 text-foreground flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-45" : "rotate-0"
                  }`}
                  strokeWidth={1.5}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-muted-foreground leading-relaxed pb-6 pr-12">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}