import React from 'react';
import { AlertCircle, CheckCircle, Server, Database, BookOpen } from 'lucide-react';

export const theorySlides = [
  // Slide 3 - Cosa sono le Basi di Dati
  {
    id: 3,
    title: "Cosa sono le Basi di Dati?",
    category: "theory",
    content: (
      <div className="space-y-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-blue-300 mb-6">Dai File ai Database</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-red-900/50 to-red-800/50 p-6 rounded-lg border border-red-700">
            <h3 className="text-2xl font-semibold text-red-300 mb-4 flex items-center">
              <AlertCircle className="mr-3" size={28} />
              ❌ Problemi dei File
            </h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <span className="text-red-400 mr-2">•</span>
                <span>Ridondanza dei dati</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-400 mr-2">•</span>
                <span>Inconsistenza delle informazioni</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-400 mr-2">•</span>
                <span>Difficoltà nelle ricerche</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-400 mr-2">•</span>
                <span>Nessun controllo di integrità</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-400 mr-2">•</span>
                <span>Problemi di sicurezza</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-green-900/50 to-green-800/50 p-6 rounded-lg border border-green-700">
            <h3 className="text-2xl font-semibold text-green-300 mb-4 flex items-center">
              <CheckCircle className="mr-3" size={28} />
              ✅ Vantaggi Database
            </h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <span className="text-green-400 mr-2">•</span>
                <span>Eliminazione ridondanze</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2">•</span>
                <span>Integrità dei dati garantita</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2">•</span>
                <span>Ricerche veloci ed efficienti</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2">•</span>
                <span>Controllo degli accessi</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2">•</span>
                <span>Backup e recovery automatici</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 p-6 rounded-lg border border-blue-700">
          <h3 className="text-xl font-semibold text-blue-300 mb-3">💡 Definizione</h3>
          <p className="text-gray-300 text-lg leading-relaxed">
            Un <strong className="text-blue-400">database</strong> è una collezione organizzata di dati strutturati,
            memorizzati elettronicamente e gestiti da un sistema software specializzato chiamato <strong className="text-purple-400">DBMS</strong>.
          </p>
        </div>
      </div>
    )
  },

  // Slide 4 - DBMS
  {
    id: 4,
    title: "DBMS - Database Management System",
    category: "theory",
    content: (
      <div className="space-y-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-purple-300 mb-4">Sistemi di Gestione Database</h2>
          <p className="text-gray-400 text-lg">Il software che gestisce i nostri dati</p>
        </div>

        <div className="bg-gradient-to-br from-purple-900/50 to-blue-900/50 p-6 rounded-lg border border-purple-700">
          <h3 className="text-2xl font-semibold text-purple-300 mb-4 flex items-center">
            <Server className="mr-3" size={28} />
            Cos'è un DBMS?
          </h3>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            Un DBMS è un software che fornisce gli strumenti per creare, gestire, interrogare e mantenere database.
            Fa da intermediario tra gli utenti/applicazioni e i dati fisici.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-blue-900/50 to-cyan-900/50 p-6 rounded-lg border border-blue-700">
            <h3 className="text-xl font-semibold text-blue-300 mb-4">🔧 Funzioni Principali</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• Definizione struttura dati (DDL)</li>
              <li>• Manipolazione dati (DML)</li>
              <li>• Controllo accessi e sicurezza</li>
              <li>• Gestione transazioni</li>
              <li>• Backup e recovery</li>
              <li>• Ottimizzazione query</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-green-900/50 to-teal-900/50 p-6 rounded-lg border border-green-700">
            <h3 className="text-xl font-semibold text-green-300 mb-4">📊 DBMS Popolari</h3>
            <div className="space-y-3 text-gray-300">
              <div className="flex justify-between">
                <span>SQLite</span>
                <span className="text-green-400">Embedded</span>
              </div>
              <div className="flex justify-between">
                <span>MySQL</span>
                <span className="text-blue-400">Web</span>
              </div>
              <div className="flex justify-between">
                <span>PostgreSQL</span>
                <span className="text-purple-400">Enterprise</span>
              </div>
              <div className="flex justify-between">
                <span>Oracle</span>
                <span className="text-red-400">Corporate</span>
              </div>
              <div className="flex justify-between">
                <span>MongoDB</span>
                <span className="text-yellow-400">NoSQL</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  },

  // Slide 33 - Transazioni e ACID
  {
    id: 42,
    title: "Transazioni e Proprietà ACID",
    category: "theory",
    content: (
      <div className="space-y-6">
        <div className="bg-gradient-to-br from-blue-900/50 to-indigo-900/50 p-6 rounded-lg border border-blue-700">
          <h3 className="text-xl font-bold text-blue-300 mb-4">💳 Transazioni</h3>
          <p className="text-gray-300 mb-4">
            Una transazione è una sequenza di operazioni che deve essere eseguita completamente o per niente.
          </p>
          <div className="bg-gray-900/50 text-green-400 p-4 rounded border border-gray-700 text-sm">
            <code>
              BEGIN TRANSACTION;<br/>
              UPDATE conti SET saldo = saldo - 100 WHERE id = 1;<br/>
              UPDATE conti SET saldo = saldo + 100 WHERE id = 2;<br/>
              COMMIT; -- o ROLLBACK per annullare
            </code>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-gradient-to-br from-red-900/50 to-red-800/50 p-4 rounded-lg border border-red-700 text-center">
            <div className="text-2xl font-bold text-red-300">A</div>
            <div className="font-semibold text-red-200">Atomicity</div>
            <div className="text-xs text-gray-400">Tutto o niente</div>
          </div>
          <div className="bg-gradient-to-br from-green-900/50 to-green-800/50 p-4 rounded-lg border border-green-700 text-center">
            <div className="text-2xl font-bold text-green-300">C</div>
            <div className="font-semibold text-green-200">Consistency</div>
            <div className="text-xs text-gray-400">Dati coerenti</div>
          </div>
          <div className="bg-gradient-to-br from-purple-900/50 to-purple-800/50 p-4 rounded-lg border border-purple-700 text-center">
            <div className="text-2xl font-bold text-purple-300">I</div>
            <div className="font-semibold text-purple-200">Isolation</div>
            <div className="text-xs text-gray-400">Isolamento</div>
          </div>
          <div className="bg-gradient-to-br from-orange-900/50 to-orange-800/50 p-4 rounded-lg border border-orange-700 text-center">
            <div className="text-2xl font-bold text-orange-300">D</div>
            <div className="font-semibold text-orange-200">Durability</div>
            <div className="text-xs text-gray-400">Persistenza</div>
          </div>
        </div>
        <div className="bg-gradient-to-br from-yellow-900/50 to-orange-900/50 p-4 rounded-lg border border-yellow-700">
          <h4 className="font-semibold text-yellow-300 mb-2">⚠️ Esempio Pratico</h4>
          <p className="text-gray-300 text-sm">
            Trasferimento di denaro: se fallisce una delle due operazioni, deve fallire tutto per mantenere la coerenza.
          </p>
        </div>
      </div>
    )
  },

  // Slide 37 - Normalizzazione Database
  {
    id: 43,
    title: "Normalizzazione Database",
    category: "theory",
    content: (
      <div className="space-y-6">
        <div className="bg-gradient-to-br from-violet-900/50 to-purple-900/50 p-6 rounded-lg border border-violet-700">
          <h3 className="text-xl font-bold text-violet-300 mb-4">📐 Forme Normali</h3>
          <p className="text-gray-300 mb-4">
            La normalizzazione elimina ridondanze e anomalie nella struttura del database.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gradient-to-br from-blue-900/50 to-blue-800/50 p-4 rounded-lg border border-blue-700">
            <h4 className="font-semibold text-blue-300 mb-3">1° Forma Normale</h4>
            <ul className="space-y-1 text-sm text-gray-300">
              <li>• Valori atomici</li>
              <li>• No valori multipli</li>
              <li>• Chiave primaria</li>
            </ul>
            <div className="mt-3 p-2 bg-gray-900/50 rounded border border-gray-700 text-xs">
              <strong className="text-red-400">❌ Errato:</strong><br/>
              <span className="text-gray-300">nome: "Mario, Luigi"</span><br/>
              <strong className="text-green-400">✅ Corretto:</strong><br/>
              <span className="text-gray-300">Due righe separate</span>
            </div>
          </div>
          <div className="bg-gradient-to-br from-green-900/50 to-green-800/50 p-4 rounded-lg border border-green-700">
            <h4 className="font-semibold text-green-300 mb-3">2° Forma Normale</h4>
            <ul className="space-y-1 text-sm text-gray-300">
              <li>• 1FN + dipendenza totale</li>
              <li>• No dipendenze parziali</li>
              <li>• Chiave composta</li>
            </ul>
            <div className="mt-3 p-2 bg-gray-900/50 rounded border border-gray-700 text-xs text-gray-300">
              Separa attributi che dipendono<br/>
              solo da parte della chiave
            </div>
          </div>
          <div className="bg-gradient-to-br from-purple-900/50 to-purple-800/50 p-4 rounded-lg border border-purple-700">
            <h4 className="font-semibold text-purple-300 mb-3">3° Forma Normale</h4>
            <ul className="space-y-1 text-sm text-gray-300">
              <li>• 2FN + no dipendenze transitive</li>
              <li>• Attributi dipendenti solo dalla chiave</li>
            </ul>
            <div className="mt-3 p-2 bg-gray-900/50 rounded border border-gray-700 text-xs text-gray-300">
              Elimina dipendenze<br/>
              A→B→C
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-br from-orange-900/50 to-red-900/50 p-4 rounded-lg border border-orange-700">
          <h4 className="font-semibold text-orange-300 mb-3">🎯 Esempio Biblioteca</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
            <div>
              <strong className="text-red-400">❌ Non Normalizzato:</strong>
              <div className="bg-gray-900/50 p-2 rounded border border-gray-700 mt-1 text-xs text-gray-300">
                prestiti(id, utente_nome, utente_email, libro_titolo, libro_autore)
              </div>
            </div>
            <div>
              <strong className="text-green-400">✅ Normalizzato:</strong>
              <div className="bg-gray-900/50 p-2 rounded border border-gray-700 mt-1 text-xs text-gray-300">
                utenti(id, nome, email)<br/>
                libri(id, titolo, autore)<br/>
                prestiti(id, id_utente, id_libro)
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
];