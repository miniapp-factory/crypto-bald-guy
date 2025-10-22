"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Card, CardHeader, CardContent, CardFooter } from "./ui/card";

export function CryptoBaldGuy() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleAsk = async () => {
    if (!question.trim()) return;
    setLoading(true);
    // Simulate a quick answer. In a real app you might call an API here.
    const lower = question.toLowerCase();
    let resp = "Sorry, I don't understand that question.";
    if (lower.includes("price") || lower.includes("value")) {
      resp = "The current price of Bitcoin is $30,000 (approx).";
    } else if (lower.includes("blockchain")) {
      resp = "A blockchain is a distributed ledger that records transactions.";
    } else if (lower.includes("wallet")) {
      resp = "A crypto wallet stores your private keys and lets you send/receive tokens.";
    } else {
      resp = `You asked: "${question}". I don't have an answer yet, but I'm learning!`;
    }
    // Simulate network delay
    setTimeout(() => {
      setAnswer(resp);
      setLoading(false);
    }, 800);
  };

  return (
    <Card className="w-full max-w-md mx-auto mt-8">
      <CardHeader className="flex flex-col items-center gap-2">
        <img
          src="/icon.png"
          alt="Crypto Bald Guy"
          className="w-24 h-24 rounded-full border-4 border-primary"
        />
        <h2 className="text-xl font-semibold">Crypto Bald Guy</h2>
      </CardHeader>
      <CardContent>
        <Input
          placeholder="Ask me about crypto..."
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleAsk()}
        />
      </CardContent>
      <CardFooter className="flex flex-col gap-4">
        <Button onClick={handleAsk} disabled={loading || !question.trim()}>
          {loading ? "Thinking…" : "Ask"}
        </Button>
        {answer && (
          <div className="p-4 bg-muted rounded-md text-sm">
            <strong>Answer:</strong> {answer}
          </div>
        )}
      </CardFooter>
    </Card>
  );
}
