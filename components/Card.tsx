"use client";
import { getCardById } from "@/services/services";
import { useEffect, useState } from "react";

export interface Card {
  title: string;
  body: string;
}

export const Card = ({ id }: { id: string }) => {
  const [card, setCard] = useState<Card>();

  useEffect(() => {
    getCardById(id).then((card) => setCard(card));
  }, [id]);

  if (!card) {
    return <div className="skeleton h-[172px]" />;
  }

  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body">
        <h3 className="card-title">{card.title}</h3>
        <p>{card.body}</p>
      </div>
    </div>
  );
};
