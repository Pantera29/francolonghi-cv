"use client";

import { Card, CardContent } from "@/components/ui/card";
import { RESUME_DATA } from "@/data/resume-data";
import { DONATION_DATA } from "@/data/donation-data";
import { Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export function CafecitoDonations() {
  const [copiedAddress, setCopiedAddress] = useState<string | null>(null);

  const handleCopy = async (address: string) => {
    await navigator.clipboard.writeText(address);
    setCopiedAddress(address);
    setTimeout(() => setCopiedAddress(null), 2000);
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl">
      <div className="text-center mb-8">
        <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
          <img 
            src={RESUME_DATA.avatarUrl} 
            alt="Profile" 
            className="w-full h-full object-cover"
          />
        </div>
        <h1 className="text-3xl font-bold mb-4">¡Ayudame con un cafecito! ☕</h1>
        <p className="text-lg text-gray-600 mb-8">
          Si alguno de los proyectos que hice te ayudo, podes invitarme un cafecito.
        </p>
      </div>

      <Card>
        <CardContent className="pt-6">
          <h2 className="text-xl font-bold mb-4">Mis datos:</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold mb-2">
                {DONATION_DATA.crypto.title} - {DONATION_DATA.crypto.subtitle}
              </h3>
              
              <div className="space-y-4">
                {DONATION_DATA.crypto.addresses.map((crypto) => (
                  <div key={crypto.name}>
                    <p className="font-medium">{crypto.name}:</p>
                    <div className="flex gap-2 items-center">
                      <code className="flex-1 block bg-gray-100 p-2 rounded text-sm break-all">
                        {crypto.address}
                      </code>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleCopy(crypto.address)}
                        className="shrink-0"
                      >
                        <Copy className={`h-4 w-4 ${copiedAddress === crypto.address ? 'text-green-500' : ''}`} />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
} 