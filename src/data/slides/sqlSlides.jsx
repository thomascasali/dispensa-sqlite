import React from 'react';
import { Code, Search, AlertCircle, Table, FileText, Users, User, Settings } from 'lucide-react';

export const sqlSlides = [
  // Slide 13 - Progetto Completo: Sistema Studenti-Classi
  {
    id: 13,
    title: "Progetto Completo: Sistema Studenti-Classi",
    category: "practice",
    content: (
      <div className="space-y-6">
        <div className="text-center">
          <Users size={64} className="text-orange-400 mb-4 mx-auto" />
          <h2 className="text-3xl font-bold text-orange-300 mb-4">Sistema Gestione Scolastica</h2>
          <p className="text-gray-400">Il nostro primo progetto completo per consolidare CREATE TABLE e relazioni</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-blue-900/50 to-blue-800/50 p-6 rounded-lg border border-blue-700">
            <h3 className="text-xl font-semibold text-blue-300 mb-4 flex items-center">
              <Users className="mr-2" size={20} />
              🏫 Tabella Classi
            </h3>
            <div className="bg-gray-900/50 p-4 rounded border border-gray-700">
              <code className="text-green-400 text-sm">
                CREATE TABLE classi (<br/>
                &nbsp;&nbsp;id_classe INTEGER PRIMARY KEY AUTOINCREMENT,<br/>
                &nbsp;&nbsp;sigla TEXT NOT NULL UNIQUE,<br/>
                &nbsp;&nbsp;indirizzo TEXT NOT NULL<br/>
                );
              </code>
            </div>
            <div className="text-xs text-gray-400 mt-2">
              <strong>UNIQUE:</strong> Ogni sigla è univoca (es: "3H", "4G")
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-900/50 to-green-800/50 p-6 rounded-lg border border-green-700">
            <h3 className="text-xl font-semibold text-green-300 mb-4 flex items-center">
              <User className="mr-2" size={20} />
              🎓 Tabella Studenti
            </h3>
            <div className="bg-gray-900/50 p-4 rounded border border-gray-700">
              <code className="text-green-400 text-sm">
                CREATE TABLE studenti (<br/>
                &nbsp;&nbsp;id_studente INTEGER PRIMARY KEY AUTOINCREMENT,<br/>
                &nbsp;&nbsp;nome TEXT NOT NULL,<br/>
                &nbsp;&nbsp;cognome TEXT NOT NULL,<br/>
                &nbsp;&nbsp;data_nascita TEXT,<br/>
                &nbsp;&nbsp;media_voti REAL DEFAULT 0.0,<br/>
                &nbsp;&nbsp;id_classe INTEGER NOT NULL,<br/>
                &nbsp;&nbsp;FOREIGN KEY (id_classe) REFERENCES classi(id_classe)<br/>
                );
              </code>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-900/50 to-indigo-900/50 p-6 rounded-lg border border-purple-700">
          <h3 className="text-xl font-semibold text-purple-300 mb-4">📊 Schema Relazionale</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-gray-900/30 p-4 rounded text-center">
              <div className="text-blue-400 font-semibold mb-2">📋 Classi</div>
              <div className="text-xs text-gray-300 space-y-1">
                <div><code>id_classe</code> (PK)</div>
                <div><code>sigla</code></div>
                <div><code>indirizzo</code></div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="text-purple-300 text-3xl">→</div>
            </div>
            <div className="bg-gray-900/30 p-4 rounded text-center">
              <div className="text-green-400 font-semibold mb-2">👥 Studenti</div>
              <div className="text-xs text-gray-300 space-y-1">
                <div><code>id_studente</code> (PK)</div>
                <div><code>nome, cognome</code></div>
                <div><code>data_nascita</code></div>
                <div><code>media_voti</code></div>
                <div><code>id_classe</code> (FK)</div>
              </div>
            </div>
          </div>
          <div className="text-center mt-4 text-sm text-purple-200">
            <strong>Relazione 1:N</strong> - Una classe può avere molti studenti
          </div>
        </div>

        <div className="bg-gradient-to-r from-orange-900/50 to-red-900/50 p-6 rounded-lg border border-orange-700">
          <h3 className="text-xl font-semibold text-orange-300 mb-4">💡 Vantaggi di questo Schema</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="text-orange-200 font-semibold mb-2">✅ Efficienza:</h4>
              <ul className="text-sm text-gray-300 space-y-1">
                <li>• Dati classe memorizzati una sola volta</li>
                <li>• Cambio indirizzo = 1 aggiornamento</li>
                <li>• Spazio di archiviazione ottimizzato</li>
              </ul>
            </div>
            <div>
              <h4 className="text-orange-200 font-semibold mb-2">🛡️ Integrità:</h4>
              <ul className="text-sm text-gray-300 space-y-1">
                <li>• Impossibile assegnare classe inesistente</li>
                <li>• Coerenza garantita dal DBMS</li>
                <li>• Errori di digitazione prevenuti</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  },

  // Slide 14 - INSERT - Inserimento Dati
  {
    id: 14,
    title: "INSERT - Inserire Dati",
    category: "sql",
    content: (
      <div className="space-y-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-cyan-300 mb-4">Inserimento Dati</h2>
          <p className="text-gray-400">Popolare le tabelle con i nostri dati</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-blue-900/50 to-indigo-900/50 p-6 rounded-lg border border-blue-700">
            <h3 className="text-xl font-semibold text-blue-300 mb-4">📋 Tabelle: Nomi Plurali</h3>
            <div className="space-y-3">
              <div className="bg-green-900/30 p-3 rounded">
                <div className="text-green-400 font-semibold">✅ Corretto:</div>
                <code className="text-green-300 text-sm">studenti, classi, voti</code>
              </div>
              <div className="bg-red-900/30 p-3 rounded">
                <div className="text-red-400 font-semibold">❌ Scorretto:</div>
                <code className="text-red-300 text-sm">studente, classe, voto</code>
              </div>
            </div>
            <p className="text-gray-300 text-sm mt-3">
              Le tabelle contengono molte entità, quindi usiamo il plurale.
            </p>
          </div>

          <div className="bg-gradient-to-br from-green-900/50 to-emerald-900/50 p-6 rounded-lg border border-green-700">
            <h3 className="text-xl font-semibold text-green-300 mb-4">🏷️ Campi: Nomi Singolari</h3>
            <div className="space-y-3">
              <div className="bg-green-900/30 p-3 rounded">
                <div className="text-green-400 font-semibold">✅ Corretto:</div>
                <code className="text-green-300 text-sm">titolo, autore, genere</code>
              </div>
              <div className="bg-red-900/30 p-3 rounded">
                <div className="text-red-400 font-semibold">❌ Scorretto:</div>
                <code className="text-red-300 text-sm">titoli, autori, generi</code>
              </div>
            </div>
            <p className="text-gray-300 text-sm mt-3">
              Ogni campo contiene un singolo valore per riga.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 p-6 rounded-lg border border-purple-700">
          <h3 className="text-xl font-semibold text-purple-300 mb-4">🔑 ID Descrittivi</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <div className="bg-green-900/30 p-3 rounded mb-3">
                <div className="text-green-400 font-semibold">✅ ID Descrittivi:</div>
                <div className="text-green-300 text-sm space-y-1">
                  <div><code>id_libro</code> - chiaro e specifico</div>
                  <div><code>id_utente</code> - identifica il tipo</div>
                  <div><code>id_categoria</code> - autoesplicativo</div>
                </div>
              </div>
            </div>
            <div>
              <div className="bg-red-900/30 p-3 rounded mb-3">
                <div className="text-red-400 font-semibold">❌ ID Generici:</div>
                <div className="text-red-300 text-sm space-y-1">
                  <div><code>id</code> - ambiguo</div>
                  <div><code>pk</code> - poco chiaro</div>
                  <div><code>key</code> - generico</div>
                </div>
              </div>
            </div>
          </div>
          <p className="text-gray-300 text-sm mt-3">
            <strong>Vantaggio:</strong> Nelle relazioni sarà chiaro quale campo collega a quale tabella!
          </p>
        </div>

        <div className="bg-gradient-to-r from-orange-900/50 to-yellow-900/50 p-6 rounded-lg border border-orange-700">
          <h3 className="text-xl font-semibold text-orange-300 mb-4">🐍 Il Formato snake_case</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="bg-gray-900/30 p-3 rounded">
              <div className="text-orange-400 font-semibold mb-2">Cos'è lo snake_case?</div>
              <div className="text-gray-300 text-sm">
                Parole separate da underscore (_)<br/>
                Tutto in minuscolo<br/>
                <code className="text-green-400">data_pubblicazione</code><br/>
                <code className="text-green-400">numero_pagine</code>
              </div>
            </div>
            <div className="bg-gray-900/30 p-3 rounded">
              <div className="text-orange-400 font-semibold mb-2">Perché snake_case?</div>
              <div className="text-gray-300 text-sm">
                ✅ Standard SQL diffuso<br/>
                ✅ Sempre case-insensitive<br/>
                ✅ Facile da leggere<br/>
                ✅ Compatibile ovunque
              </div>
            </div>
          </div>
          <div className="bg-gray-900/50 p-4 rounded border border-gray-700">
            <code className="text-green-400 text-sm">
              CREATE TABLE studenti (<br/>
              &nbsp;&nbsp;id_studente INTEGER PRIMARY KEY,<br/>
              &nbsp;&nbsp;nome TEXT NOT NULL,<br/>
              &nbsp;&nbsp;cognome TEXT NOT NULL,<br/>
              &nbsp;&nbsp;id_classe INTEGER,<br/>
              &nbsp;&nbsp;data_nascita TEXT<br/>
              );
            </code>
          </div>
          <p className="text-gray-300 text-sm mt-3">
            <strong>Il nostro standard:</strong> tabelle plurali, campi singolari, tutto in snake_case!
          </p>
        </div>
      </div>
    )
  },

  // Slide 15 - SELECT - Interrogare i Dati
  {
    id: 15,
    title: "SELECT - Interrogare i Dati",
    category: "sql",
    content: (
      <div className="space-y-6">
        <div className="text-center">
          <Users size={64} className="text-cyan-400 mb-4 mx-auto" />
          <h2 className="text-3xl font-bold text-cyan-300 mb-4">Collegare le Tabelle</h2>
          <p className="text-gray-400">Il cuore dei database relazionali</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-blue-900/50 to-indigo-900/50 p-6 rounded-lg border border-blue-700">
            <h3 className="text-xl font-semibold text-blue-300 mb-4">🔗 Cos'è una Relazione?</h3>
            <p className="text-gray-300 text-sm mb-4">
              Una relazione collega due tabelle attraverso campi comuni.
              È come dire "questo studente appartiene a questa classe".
            </p>
            <div className="bg-gray-900/30 p-3 rounded">
              <div className="text-blue-400 font-semibold mb-2">Esempio:</div>
              <div className="text-gray-300 text-sm">
                <div>🎓 Tabella <code>studenti</code></div>
                <div>🏫 Tabella <code>classi</code></div>
                <div className="mt-2">
                  <strong>Relazione:</strong> Ogni studente appartiene a una classe
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-900/50 to-emerald-900/50 p-6 rounded-lg border border-green-700">
            <h3 className="text-xl font-semibold text-green-300 mb-4">🔑 Chiave Esterna (Foreign Key)</h3>
            <p className="text-gray-300 text-sm mb-4">
              Un campo che fa riferimento alla chiave primaria di un'altra tabella.
            </p>
            <div className="bg-gray-900/30 p-3 rounded">
              <div className="text-green-400 font-semibold mb-2">Schema:</div>
              <div className="text-gray-300 text-sm space-y-1">
                <div><code>classi.id_classe</code> ← Chiave primaria</div>
                <div><code>studenti.id_classe</code> ← Chiave esterna</div>
                <div className="mt-2 text-xs text-gray-400">
                  La chiave esterna deve sempre riferirsi a un valore esistente!
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 p-6 rounded-lg border border-purple-700">
          <h3 className="text-xl font-semibold text-purple-300 mb-4">📋 Esempio Completo</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="text-purple-200 font-semibold mb-2">Tabella Classi:</h4>
              <div className="bg-gray-900/50 p-3 rounded border border-gray-700">
                <code className="text-green-400 text-xs">
                  CREATE TABLE classi (<br/>
                  &nbsp;&nbsp;id_classe INTEGER PRIMARY KEY,<br/>
                  &nbsp;&nbsp;sigla TEXT NOT NULL UNIQUE,<br/>
                  &nbsp;&nbsp;indirizzo TEXT NOT NULL<br/>
                  );
                </code>
              </div>
            </div>
            <div>
              <h4 className="text-purple-200 font-semibold mb-2">Tabella Studenti (con relazione):</h4>
              <div className="bg-gray-900/50 p-3 rounded border border-gray-700">
                <code className="text-green-400 text-xs">
                  CREATE TABLE studenti (<br/>
                  &nbsp;&nbsp;id_studente INTEGER PRIMARY KEY,<br/>
                  &nbsp;&nbsp;nome TEXT NOT NULL,<br/>
                  &nbsp;&nbsp;cognome TEXT NOT NULL,<br/>
                  &nbsp;&nbsp;id_classe INTEGER NOT NULL,<br/>
                  &nbsp;&nbsp;FOREIGN KEY (id_classe)<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;REFERENCES classi(id_classe)<br/>
                  );
                </code>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-orange-900/50 to-red-900/50 p-6 rounded-lg border border-orange-700">
          <h3 className="text-xl font-semibold text-orange-300 mb-4">💡 Perché le Relazioni?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-300">
            <div className="bg-gray-900/30 p-3 rounded">
              <div className="text-green-400 font-semibold mb-2">✅ Evitano Duplicazioni</div>
              <div>
                Non ripetiamo "3H Informatica" per ogni studente. Lo scriviamo una volta in <code>classi</code>.
              </div>
            </div>
            <div className="bg-gray-900/30 p-3 rounded">
              <div className="text-blue-400 font-semibold mb-2">🔧 Facilitano Modifiche</div>
              <div>
                Per cambiare l'indirizzo di una classe, modifichiamo un solo record.
              </div>
            </div>
            <div className="bg-gray-900/30 p-3 rounded">
              <div className="text-purple-400 font-semibold mb-2">🛡️ Garantiscono Coerenza</div>
              <div>
                Non possiamo assegnare una classe inesistente a uno studente.
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  },

  // Slide 16 - UPDATE e DELETE
  {
    id: 16,
    title: "UPDATE e DELETE - Modificare e Cancellare",
    category: "sql",
    content: (
      <div className="space-y-6">
        <div className="text-center">
          <Search size={64} className="text-cyan-400 mb-4 mx-auto" />
          <h2 className="text-3xl font-bold text-cyan-300 mb-4">Query di Base</h2>
          <p className="text-gray-400">Il comando più importante: recuperare informazioni</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-cyan-900/50 to-blue-900/50 p-6 rounded-lg border border-cyan-700">
            <h3 className="text-xl font-semibold text-cyan-300 mb-4">🔍 SELECT Semplice</h3>
            <div className="space-y-3">
              <div className="bg-gray-900/50 p-3 rounded border border-gray-700">
                <code className="text-green-400 text-sm">SELECT * FROM studenti;</code>
                <div className="text-gray-400 text-xs mt-1">Tutti i campi, tutte le righe</div>
              </div>
              <div className="bg-gray-900/50 p-3 rounded border border-gray-700">
                <code className="text-green-400 text-sm">SELECT nome, cognome FROM studenti;</code>
                <div className="text-gray-400 text-xs mt-1">Solo campi specifici</div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-900/50 to-indigo-900/50 p-6 rounded-lg border border-purple-700">
            <h3 className="text-xl font-semibold text-purple-300 mb-4">🎯 WHERE - Filtrare</h3>
            <div className="space-y-3">
              <div className="bg-gray-900/50 p-3 rounded border border-gray-700">
                <code className="text-green-400 text-sm">SELECT * FROM studenti<br/>WHERE id_classe = 1;</code>
              </div>
              <div className="bg-gray-900/50 p-3 rounded border border-gray-700">
                <code className="text-green-400 text-sm">SELECT * FROM studenti<br/>WHERE cognome = 'Rossi';</code>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-green-900/50 to-emerald-900/50 p-6 rounded-lg border border-green-700">
          <h3 className="text-xl font-semibold text-green-300 mb-4">🔧 Operatori Utili</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-300">
            <div>
              <strong className="text-blue-400">=</strong> uguale<br/>
              <strong className="text-blue-400">!=</strong> diverso<br/>
              <strong className="text-blue-400">&lt;</strong> minore<br/>
              <strong className="text-blue-400">&gt;</strong> maggiore
            </div>
            <div>
              <strong className="text-green-400">LIKE</strong> simile<br/>
              <strong className="text-green-400">IN</strong> nell'elenco<br/>
              <strong className="text-green-400">BETWEEN</strong> tra valori<br/>
              <strong className="text-green-400">IS NULL</strong> è nullo
            </div>
            <div>
              <strong className="text-purple-400">AND</strong> e<br/>
              <strong className="text-purple-400">OR</strong> oppure<br/>
              <strong className="text-purple-400">NOT</strong> non<br/>
            </div>
            <div>
              <strong className="text-orange-400">%</strong> qualsiasi testo<br/>
              <strong className="text-orange-400">_</strong> un carattere<br/>
            </div>
          </div>
        </div>
      </div>
    )
  },

  // Slide 17 - WHERE e Condizioni
  {
    id: 17,
    title: "WHERE e Condizioni",
    category: "sql",
    content: (
      <div className="space-y-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-red-300 mb-4">Modificare e Rimuovere Dati</h2>
          <p className="text-gray-400">Operazioni potenti che richiedono attenzione</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-blue-900/50 to-cyan-900/50 p-6 rounded-lg border border-blue-700">
            <h3 className="text-xl font-semibold text-blue-300 mb-4">✏️ UPDATE - Modificare</h3>
            <div className="space-y-4">
              <div className="bg-gray-900/50 p-4 rounded border border-gray-700">
                <code className="text-green-400 text-sm">
                  UPDATE studenti<br/>
                  SET media_voti = 8.5<br/>
                  WHERE id_studente = 1;
                </code>
                <div className="text-gray-400 text-xs mt-2">Aggiorna la media di uno studente</div>
              </div>
              <div className="bg-gray-900/50 p-4 rounded border border-gray-700">
                <code className="text-green-400 text-sm">
                  UPDATE classi<br/>
                  SET indirizzo = 'Informatica e Telecomunicazioni'<br/>
                  WHERE sigla = '3H';
                </code>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-red-900/50 to-pink-900/50 p-6 rounded-lg border border-red-700">
            <h3 className="text-xl font-semibold text-red-300 mb-4">🗑️ DELETE - Cancellare</h3>
            <div className="space-y-4">
              <div className="bg-gray-900/50 p-4 rounded border border-gray-700">
                <code className="text-green-400 text-sm">
                  DELETE FROM studenti<br/>
                  WHERE media_voti &lt; 6<br/>
                  AND id_classe = 1;
                </code>
                <div className="text-gray-400 text-xs mt-2">Rimuove studenti con media insufficiente</div>
              </div>
              <div className="bg-gray-900/50 p-4 rounded border border-gray-700">
                <code className="text-green-400 text-sm">
                  DELETE FROM classi<br/>
                  WHERE sigla = '6H';
                </code>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-yellow-900/50 to-orange-900/50 p-6 rounded-lg border border-yellow-700">
          <h3 className="text-xl font-semibold text-yellow-300 mb-4 flex items-center">
            <AlertCircle className="mr-2" size={24} />
            ⚠️ ATTENZIONE!
          </h3>
          <div className="space-y-3 text-gray-300">
            <div className="bg-red-900/30 p-3 rounded">
              <strong className="text-red-400">SEMPRE usare WHERE:</strong> Senza WHERE modifichi/cancelli TUTTO!
            </div>
            <div className="bg-blue-900/30 p-3 rounded">
              <strong className="text-blue-400">Test prima:</strong> Usa SELECT per verificare cosa stai per modificare
            </div>
            <div className="bg-green-900/30 p-3 rounded">
              <strong className="text-green-400">Backup:</strong> Fai sempre backup prima di operazioni massive
            </div>
          </div>
        </div>
      </div>
    )
  }
];