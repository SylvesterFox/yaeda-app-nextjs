"use client";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "lucide-react";
import OfferButton from "./offer-button";

const questions = [
  {
    q: "Можно ли стать курьером-партнером, если мне ещё нет 18 лет?",
    a: "Стать курьером-партнером Яндекс Еды можно, если вам есть 16 лет.",
  },
  {
    q: "Можно доставлять заказы на велосипеде, самокате или только пешком?",
    a: `Вы можете доставлять заказы не только пешком. Если вы хорошо управляете самокатом, велосипедом или автомобилем, используйте их. Так вы сможете выполнять доставки быстрее, и ваш доход увеличится. Но будьте осторожны и соблюдайте правила дорожного движения.

Курьеры могут получить скидки до 40% на покупку и ремонт велосипедов и самокатов у наших партнёров. Также доступна аренда транспорта по специальной цене.`,
  },
  {
    q: "Можно ли выполнять заказы в выходные?",
    a: "Да, вы самостоятельно определяете удобное для вас время и зоны доставки. Однако если вы пользуетесь услугами курьерской службы, выбор может быть немного ограничен.",
  },
  {
    q: "У меня есть основная работа, могу ли я выполнять заказы в свободное время?",
    a: "Да, как правило, курьеры успешно совмещают основную работу и сотрудничество с партнёрами сервиса «Яндекс Еда».",
  },
];

export default function Questions() {
  return (
    <div className="w-full bg-[#D9D9D9] rounded-b-[48px] md:rounded-b-[70px] shadow-lg z-[15] flex flex-col items-center py-12 sm:py-16 px-4">
      <h1 className="font-bold text-3xl sm:text-5xl md:text-[64px] text-center mb-10">Вопросы и ответы</h1>

      <div className="w-full max-w-screen-md bg-[#C9C9C9] rounded-[24px] md:rounded-[45px] shadow-lg px-4 sm:px-6 py-6">
        {questions.map(({ q, a }, index) => (
          <Disclosure key={index}>
            {({ open }) => (
              <div className="mb-4 border-b border-black/10 pb-2">
                <Disclosure.Button className="flex justify-between items-center w-full text-left font-bold text-lg sm:text-xl md:text-2xl py-3">
                  <span>{q}</span>
                  <ChevronUpIcon
                    className={`w-6 h-6 transition-transform duration-200 ${
                      open ? "rotate-180" : ""
                    }`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="mt-2 text-base sm:text-lg font-normal whitespace-pre-line text-black/80">
                  {a}
                </Disclosure.Panel>
              </div>
            )}
          </Disclosure>
        ))}
      </div>

      <div className="mt-10">
        <OfferButton />
      </div>
    </div>
  );
}