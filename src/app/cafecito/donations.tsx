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
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      <div className="container mx-auto px-4 py-8 max-w-2xl">
        <div className="text-center mb-8">
          <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden ring-4 ring-gray-100 dark:ring-gray-700">
            <img 
              src={RESUME_DATA.avatarUrl} 
              alt="Profile" 
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white transition-colors duration-200">¡Ayudame con un cafecito! ☕</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 transition-colors duration-200">
            Si alguno de los proyectos que hice te ayudo, podes invitarme un cafecito.
          </p>
        </div>

        <Card className="dark:bg-gray-800 border dark:border-gray-700 shadow-lg transition-all duration-200">
          <CardContent className="p-8">
            <h2 className="text-xl font-bold mb-6 text-gray-900 dark:text-white transition-colors duration-200">Mis datos:</h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="font-semibold mb-4 text-gray-800 dark:text-gray-100 transition-colors duration-200">
                  {DONATION_DATA.crypto.title} - {DONATION_DATA.crypto.subtitle}
                </h3>
                
                <div className="space-y-4">
                  {DONATION_DATA.crypto.addresses.map((crypto) => (
                    <div key={crypto.name} className="rounded-lg bg-white dark:bg-gray-700/50 p-4 transition-colors duration-200">
                      <p className="font-medium text-gray-700 dark:text-gray-200 mb-2 transition-colors duration-200">{crypto.name}:</p>
                      <div className="flex gap-2 items-center">
                        <code className="flex-1 block bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-gray-200 p-3 rounded-md text-sm break-all border border-gray-200 dark:border-gray-600 transition-all duration-200">
                          {crypto.address}
                        </code>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => handleCopy(crypto.address)}
                          className="shrink-0 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
                        >
                          <Copy className={`h-4 w-4 ${
                            copiedAddress === crypto.address 
                              ? 'text-green-500 dark:text-green-400' 
                              : 'text-gray-500 dark:text-gray-400'
                          } transition-colors duration-200`} />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-4 text-gray-800 dark:text-gray-100 transition-colors duration-200">
                  Pesos
                </h3>
                
                <div className="space-y-4">
                  <div className="rounded-lg bg-white dark:bg-gray-700/50 p-4 transition-colors duration-200">
                    <p className="font-medium text-gray-700 dark:text-gray-200 mb-2 transition-colors duration-200">CBU:</p>
                    <div className="flex gap-2 items-center">
                      <code className="flex-1 block bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-gray-200 p-3 rounded-md text-sm break-all border border-gray-200 dark:border-gray-600 transition-all duration-200">
                        0000003100034647912006
                      </code>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleCopy("0000003100034647912006")}
                        className="shrink-0 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
                      >
                        <Copy className={`h-4 w-4 ${
                          copiedAddress === "0000003100034647912006"
                            ? 'text-green-500 dark:text-green-400' 
                            : 'text-gray-500 dark:text-gray-400'
                        } transition-colors duration-200`} />
                      </Button>
                    </div>
                  </div>

                  <div className="rounded-lg bg-white dark:bg-gray-700/50 p-4 transition-colors duration-200">
                    <p className="font-medium text-gray-700 dark:text-gray-200 mb-2 transition-colors duration-200">Alias:</p>
                    <div className="flex gap-2 items-center">
                      <code className="flex-1 block bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-gray-200 p-3 rounded-md text-sm break-all border border-gray-200 dark:border-gray-600 transition-all duration-200">
                        ferminrp.mp
                      </code>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleCopy("ferminrp.mp")}
                        className="shrink-0 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
                      >
                        <Copy className={`h-4 w-4 ${
                          copiedAddress === "ferminrp.mp"
                            ? 'text-green-500 dark:text-green-400' 
                            : 'text-gray-500 dark:text-gray-400'
                        } transition-colors duration-200`} />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
} 