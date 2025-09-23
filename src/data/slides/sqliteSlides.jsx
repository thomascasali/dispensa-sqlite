import React from 'react';
import { Database, FileText, Settings, Monitor, Download, ExternalLink } from 'lucide-react';

export const sqliteSlides = [
  // Slide 5 - Introduzione a SQLite
  {
    id: 5,
    title: "SQLite: Il Nostro DBMS",
    category: "sqlite",
    content: (
      <div className="space-y-8">
        <div className="text-center">
          <Database size={80} className="text-green-400 mb-4 mx-auto animate-bounce" />
          <h2 className="text-4xl font-bold text-green-300 mb-4">SQLite</h2>
          <p className="text-gray-400 text-lg">Il database più diffuso al mondo</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-green-900/50 to-emerald-900/50 p-6 rounded-lg border border-green-700">
            <h3 className="text-xl font-semibold text-green-300 mb-4">✨ Caratteristiche</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• <strong>Serverless:</strong> Nessun server da configurare</li>
              <li>• <strong>Self-contained:</strong> Una sola libreria</li>
              <li>• <strong>Zero-configuration:</strong> Funziona subito</li>
              <li>• <strong>Cross-platform:</strong> Ovunque</li>
              <li>• <strong>Piccolo:</strong> &lt; 1MB di spazio</li>
              <li>• <strong>Veloce:</strong> Ottimizzato per performance</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-blue-900/50 to-indigo-900/50 p-6 rounded-lg border border-blue-700">
            <h3 className="text-xl font-semibold text-blue-300 mb-4">🎯 Quando Usarlo</h3>
            <div className="space-y-3 text-gray-300">
              <div className="bg-green-800/30 p-3 rounded">
                <div className="font-semibold text-green-300">✅ Ideale per:</div>
                <div className="text-sm">App mobile, desktop, prototopi, analisi dati</div>
              </div>
              <div className="bg-yellow-800/30 p-3 rounded">
                <div className="font-semibold text-yellow-300">⚠️ Limitato per:</div>
                <div className="text-sm">Server web con molti utenti simultanei</div>
              </div>
              <div className="bg-red-800/30 p-3 rounded">
                <div className="font-semibold text-red-300">❌ Non per:</div>
                <div className="text-sm">Sistemi enterprise con migliaia di utenti</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 p-6 rounded-lg border border-purple-700">
          <h3 className="text-xl font-semibold text-purple-300 mb-3 flex items-center">
            <FileText className="mr-2" size={24} />
            Un File, Un Database
          </h3>
          <p className="text-gray-300">
            Con SQLite, ogni database è semplicemente un file con estensione <code className="bg-gray-800 px-2 py-1 rounded text-green-400">.db</code> o <code className="bg-gray-800 px-2 py-1 rounded text-green-400">.sqlite</code>.
            Facile da trasferire, copiare e condividere!
          </p>
        </div>
      </div>
    )
  },

  // Slide 6 - Installazione e Primi Passi
  {
    id: 6,
    title: "Installazione e Primi Passi",
    category: "sqlite",
    content: (
      <div className="space-y-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-green-300 mb-4">Iniziamo con SQLite</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-blue-900/50 to-blue-800/50 p-6 rounded-lg border border-blue-700">
            <h3 className="text-xl font-semibold text-blue-300 mb-4">🪟 Installazione Windows</h3>
            <div className="space-y-3">
              <div className="bg-gray-900/50 p-3 rounded border border-gray-700">
                <div className="text-sm text-gray-400 mb-2">Opzione 1 - WinGet:</div>
                <code className="text-green-400 text-sm">winget install SQLite.SQLite</code>
              </div>
              <div className="bg-gray-900/50 p-3 rounded border border-gray-700">
                <div className="text-sm text-gray-400 mb-2">Opzione 2 - Download:</div>
                <div className="text-xs text-gray-300">
                  1. Vai su sqlite.org/download.html<br/>
                  2. Scarica sqlite-tools-win32<br/>
                  3. Estrai e aggiungi al PATH
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-900/50 to-purple-800/50 p-6 rounded-lg border border-purple-700">
            <h3 className="text-xl font-semibold text-purple-300 mb-4">🍎 Installazione macOS</h3>
            <div className="space-y-3">
              <div className="bg-gray-900/50 p-3 rounded border border-gray-700">
                <div className="text-sm text-gray-400 mb-2">Con Homebrew:</div>
                <code className="text-green-400 text-sm">brew install sqlite</code>
              </div>
              <div className="bg-gray-900/50 p-3 rounded border border-gray-700">
                <div className="text-sm text-gray-400 mb-2">Già incluso:</div>
                <div className="text-xs text-gray-300">
                  SQLite è preinstallato su macOS.<br/>
                  Prova: <code className="text-green-400">sqlite3 --version</code>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-900/50 to-green-800/50 p-6 rounded-lg border border-green-700">
            <h3 className="text-xl font-semibold text-green-300 mb-4">🐧 Installazione Linux</h3>
            <div className="space-y-3">
              <div className="bg-gray-900/50 p-3 rounded border border-gray-700">
                <div className="text-sm text-gray-400 mb-2">Ubuntu/Debian:</div>
                <code className="text-green-400 text-sm">sudo apt install sqlite3</code>
              </div>
              <div className="bg-gray-900/50 p-3 rounded border border-gray-700">
                <div className="text-sm text-gray-400 mb-2">CentOS/RHEL:</div>
                <code className="text-green-400 text-sm">sudo yum install sqlite</code>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div className="bg-gradient-to-br from-cyan-900/50 to-cyan-800/50 p-6 rounded-lg border border-cyan-700">
            <h3 className="text-xl font-semibold text-cyan-300 mb-4">🚀 Primi Comandi</h3>
            <div className="bg-gray-900/50 p-4 rounded border border-gray-700">
              <div className="text-green-400 font-mono text-sm space-y-2">
                <div><span className="text-gray-500"># Crea/apre un database</span></div>
                <div>sqlite3 scuola.db</div>
                <div className="mt-3"><span className="text-gray-500"># Comandi utili</span></div>
                <div>.help</div>
                <div>.tables</div>
                <div>.schema</div>
                <div>.quit</div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-orange-900/50 to-red-900/50 p-6 rounded-lg border border-orange-700">
            <h3 className="text-xl font-semibold text-orange-300 mb-4">🎯 Prima Sessione</h3>
            <div className="bg-gray-900/50 p-4 rounded border border-gray-700">
              <div className="text-green-400 font-mono text-sm space-y-1">
                <div><span className="text-yellow-400">$</span> sqlite3 biblioteca.db</div>
                <div><span className="text-blue-400">sqlite&gt;</span> .tables</div>
                <div><span className="text-blue-400">sqlite&gt;</span> SELECT 'Ciao SQLite!' as messaggio;</div>
                <div className="text-gray-400">Ciao SQLite!</div>
                <div><span className="text-blue-400">sqlite&gt;</span> .quit</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  },

  // Slide 7 - Primo Database
  {
    id: 7,
    title: "Primo Database",
    category: "sqlite",
    content: (
      <div className="space-y-6">
        <div className="text-center">
          <Database size={64} className="text-green-400 mb-4 mx-auto" />
          <h2 className="text-3xl font-bold text-green-300 mb-4">Il Primo Database</h2>
          <p className="text-gray-400">Creiamo insieme il nostro primo database</p>
        </div>

        <div className="bg-gradient-to-br from-blue-900/50 to-indigo-900/50 p-6 rounded-lg border border-blue-700">
          <h3 className="text-xl font-semibold text-blue-300 mb-4">🚀 Primi Passi</h3>
          <div className="bg-gray-900/50 p-4 rounded border border-gray-700">
            <code className="text-green-400 text-sm">
              $ sqlite3 biblioteca.db<br/>
              SQLite version 3.x.x<br/>
              Enter ".help" for usage hints.<br/>
              sqlite&gt;
            </code>
          </div>
          <div className="text-gray-400 text-sm mt-2">
            Il file biblioteca.db viene creato automaticamente se non esiste
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-green-900/50 to-emerald-900/50 p-6 rounded-lg border border-green-700">
            <h3 className="text-xl font-semibold text-green-300 mb-4">📋 Comandi Base CLI</h3>
            <div className="space-y-2 text-gray-300 text-sm">
              <div><code className="text-blue-400">.help</code> - Mostra tutti i comandi</div>
              <div><code className="text-green-400">.tables</code> - Lista le tabelle</div>
              <div><code className="text-purple-400">.schema</code> - Mostra lo schema</div>
              <div><code className="text-yellow-400">.quit</code> - Esce da SQLite</div>
              <div><code className="text-red-400">.exit</code> - Alternativa a .quit</div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 p-6 rounded-lg border border-purple-700">
            <h3 className="text-xl font-semibold text-purple-300 mb-4">🎯 Prima Query</h3>
            <div className="bg-gray-900/50 p-4 rounded border border-gray-700">
              <code className="text-green-400 text-sm">
                sqlite&gt; SELECT 'Ciao SQLite!' AS messaggio;<br/>
                Ciao SQLite!
              </code>
            </div>
            <div className="text-gray-400 text-sm mt-2">
              Perfetto! Il database funziona
            </div>
          </div>
        </div>
      </div>
    )
  },

  // Slide 8 - Tipi di Dati SQLite
  {
    id: 8,
    title: "Vincoli e Chiavi",
    category: "sqlite",
    content: (
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gradient-to-br from-red-900/50 to-red-800/50 p-4 rounded-lg border border-red-700">
            <h4 className="font-semibold text-red-300 mb-3">Vincoli Principali</h4>
            <div className="space-y-2 text-sm text-gray-300">
              <div><code>NOT NULL</code> - Campo obbligatorio</div>
              <div><code>UNIQUE</code> - Valore univoco</div>
              <div><code>PRIMARY KEY</code> - Chiave primaria</div>
              <div><code>FOREIGN KEY</code> - Chiave esterna</div>
              <div><code>CHECK</code> - Controllo personalizzato</div>
              <div><code>DEFAULT</code> - Valore predefinito</div>
              <div><code>AUTOINCREMENT</code> - Incremento automatico</div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-blue-900/50 to-blue-800/50 p-4 rounded-lg border border-blue-700">
            <h4 className="font-semibold text-blue-300 mb-3">Esempio Pratico</h4>
            <div className="bg-gray-800 text-green-400 p-3 rounded text-xs">
              <code>
                CREATE TABLE studenti (<br/>
                &nbsp;&nbsp;id INTEGER PRIMARY KEY AUTOINCREMENT,<br/>
                &nbsp;&nbsp;nome TEXT NOT NULL,<br/>
                &nbsp;&nbsp;cognome TEXT NOT NULL,<br/>
                &nbsp;&nbsp;email TEXT UNIQUE,<br/>
                &nbsp;&nbsp;attivo INTEGER DEFAULT 1<br/>
                );
              </code>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gradient-to-br from-green-900/50 to-green-800/50 p-4 rounded-lg border border-green-700">
            <h4 className="font-semibold text-green-300 mb-2">🔑 Chiave Primaria</h4>
            <p className="text-gray-300 text-sm">
              Identifica univocamente ogni riga. In SQLite, se non specificata, viene creata automaticamente una colonna <code>rowid</code>.
            </p>
          </div>
          <div className="bg-gradient-to-br from-purple-900/50 to-purple-800/50 p-4 rounded-lg border border-purple-700">
            <h4 className="font-semibold text-purple-300 mb-2">🔢 AUTOINCREMENT</h4>
            <p className="text-gray-300 text-sm mb-2">
              Genera automaticamente valori numerici crescenti per la chiave primaria.
            </p>
            <div className="bg-gray-800 text-green-400 p-2 rounded text-xs">
              <code>
                INSERT INTO studenti (nome, cognome)<br/>
                VALUES ('Mario', 'Rossi');<br/>
                -- id sarà automaticamente 1
              </code>
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-br from-yellow-900/50 to-orange-900/50 p-4 rounded-lg border border-yellow-700">
          <h4 className="font-semibold text-yellow-300 mb-2">⚠️ Importante su AUTOINCREMENT</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-300">
            <div>
              <strong>✅ Quando usarlo:</strong>
              <ul className="list-disc list-inside mt-1 space-y-1">
                <li>Chiavi primarie numeriche</li>
                <li>Quando serve un ID univoco</li>
                <li>Per mantenere ordine cronologico</li>
              </ul>
            </div>
            <div>
              <strong>🚨 Differenza da rowid:</strong>
              <ul className="list-disc list-inside mt-1 space-y-1">
                <li><code>rowid</code>: può riutilizzare valori</li>
                <li><code>AUTOINCREMENT</code>: mai riutilizza</li>
                <li>AUTOINCREMENT è più lento</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  },

  // Slide 8 - Tipi di Dati SQLite
  {
    id: 8,
    title: "Tipi di Dati in SQLite",
    category: "sqlite",
    content: (
      <div className="space-y-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-green-300 mb-4">Sistema di Tipi Dinamico</h2>
          <p className="text-gray-400">SQLite ha un approccio unico ai tipi di dati</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-blue-900/50 to-blue-800/50 p-6 rounded-lg border border-blue-700">
            <h3 className="text-xl font-semibold text-blue-300 mb-4">📊 Tipi Principali</h3>
            <div className="space-y-3">
              <div className="bg-gray-900/50 p-3 rounded border border-gray-700">
                <code className="text-blue-400">INTEGER</code>
                <div className="text-gray-400 text-sm">Numeri interi (1, 42, -15)</div>
              </div>
              <div className="bg-gray-900/50 p-3 rounded border border-gray-700">
                <code className="text-purple-400">REAL</code>
                <div className="text-gray-400 text-sm">Numeri decimali (3.14, -0.5)</div>
              </div>
              <div className="bg-gray-900/50 p-3 rounded border border-gray-700">
                <code className="text-green-400">TEXT</code>
                <div className="text-gray-400 text-sm">Stringhe di testo ('Hello', 'SQLite')</div>
              </div>
              <div className="bg-gray-900/50 p-3 rounded border border-gray-700">
                <code className="text-yellow-400">BLOB</code>
                <div className="text-gray-400 text-sm">Dati binari (immagini, file)</div>
              </div>
              <div className="bg-gray-900/50 p-3 rounded border border-gray-700">
                <code className="text-red-400">NULL</code>
                <div className="text-gray-400 text-sm">Valore mancante/sconosciuto</div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-900/50 to-emerald-900/50 p-6 rounded-lg border border-green-700">
            <h3 className="text-xl font-semibold text-green-300 mb-4">🔄 Conversioni Automatiche</h3>
            <div className="space-y-3 text-gray-300 text-sm">
              <div className="bg-gray-900/30 p-3 rounded">
                <strong className="text-green-400">'123'</strong> → <strong className="text-blue-400">123</strong><br/>
                <span className="text-gray-500">Testo numerico → Intero</span>
              </div>
              <div className="bg-gray-900/30 p-3 rounded">
                <strong className="text-blue-400">42</strong> → <strong className="text-green-400">'42'</strong><br/>
                <span className="text-gray-500">Numero → Testo (se necessario)</span>
              </div>
              <div className="bg-gray-900/30 p-3 rounded">
                <strong className="text-green-400">'3.14'</strong> → <strong className="text-purple-400">3.14</strong><br/>
                <span className="text-gray-500">Testo decimale → Reale</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-orange-900/50 to-red-900/50 p-6 rounded-lg border border-orange-700">
          <h3 className="text-xl font-semibold text-orange-300 mb-4">💡 Particolarità SQLite</h3>
          <div className="text-gray-300">
            <p className="mb-3">
              A differenza di altri database, SQLite permette di inserire qualsiasi tipo di dato in qualsiasi colonna!
            </p>
            <div className="bg-gray-900/50 p-3 rounded border border-gray-700">
              <code className="text-green-400 text-sm">
                CREATE TABLE esempio (id INTEGER, nome TEXT);<br/>
                INSERT INTO esempio VALUES ('testo', 42); -- Funziona!
              </code>
            </div>
            <p className="mt-3 text-sm text-orange-200">
              <strong>Consiglio:</strong> Anche se possibile, è meglio rispettare i tipi dichiarati per mantenere la coerenza.
            </p>
          </div>
        </div>
      </div>
    )
  },

  // Slide 9 - DDL - Data Definition Language
  {
    id: 9,
    title: "DDL - Data Definition Language",
    category: "sqlite",
    content: (
      <div className="space-y-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-green-300 mb-4">Linguaggio di Definizione Dati</h2>
          <p className="text-gray-400">Comandi per creare e modificare la struttura</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-blue-900/50 to-indigo-900/50 p-6 rounded-lg border border-blue-700">
            <h3 className="text-xl font-semibold text-blue-300 mb-4">🏗️ CREATE</h3>
            <div className="bg-gray-900/50 p-4 rounded border border-gray-700">
              <code className="text-green-400 text-sm">
                CREATE TABLE libri (<br/>
                &nbsp;&nbsp;id INTEGER PRIMARY KEY,<br/>
                &nbsp;&nbsp;titolo TEXT NOT NULL,<br/>
                &nbsp;&nbsp;autore TEXT NOT NULL<br/>
                );
              </code>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-900/50 to-emerald-900/50 p-6 rounded-lg border border-green-700">
            <h3 className="text-xl font-semibold text-green-300 mb-4">🔧 ALTER</h3>
            <div className="bg-gray-900/50 p-4 rounded border border-gray-700">
              <code className="text-green-400 text-sm">
                ALTER TABLE libri<br/>
                ADD COLUMN anno INTEGER;
              </code>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-red-900/50 to-pink-900/50 p-6 rounded-lg border border-red-700">
            <h3 className="text-xl font-semibold text-red-300 mb-4">🗑️ DROP</h3>
            <div className="bg-gray-900/50 p-4 rounded border border-gray-700">
              <code className="text-green-400 text-sm">
                DROP TABLE libri;
              </code>
            </div>
            <div className="text-red-200 text-sm mt-2">⚠️ Attenzione: cancella definitivamente!</div>
          </div>

          <div className="bg-gradient-to-br from-purple-900/50 to-indigo-900/50 p-6 rounded-lg border border-purple-700">
            <h3 className="text-xl font-semibold text-purple-300 mb-4">📋 INDEX</h3>
            <div className="bg-gray-900/50 p-4 rounded border border-gray-700">
              <code className="text-green-400 text-sm">
                CREATE INDEX idx_autore<br/>
                ON libri(autore);
              </code>
            </div>
          </div>
        </div>
      </div>
    )
  },

  // Slide 10 - DML vs DQL
  {
    id: 10,
    title: "DML vs DQL",
    category: "sqlite",
    content: (
      <div className="space-y-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-green-300 mb-4">Manipolare vs Interrogare</h2>
          <p className="text-gray-400">Due modi diversi di lavorare con i dati</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-blue-900/50 to-cyan-900/50 p-6 rounded-lg border border-blue-700">
            <h3 className="text-xl font-semibold text-blue-300 mb-4">📝 DML - Data Manipulation</h3>
            <div className="space-y-3">
              <div className="bg-gray-900/50 p-3 rounded border border-gray-700">
                <strong className="text-green-400">INSERT</strong> - Aggiunge dati
              </div>
              <div className="bg-gray-900/50 p-3 rounded border border-gray-700">
                <strong className="text-yellow-400">UPDATE</strong> - Modifica dati
              </div>
              <div className="bg-gray-900/50 p-3 rounded border border-gray-700">
                <strong className="text-red-400">DELETE</strong> - Rimuove dati
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-900/50 to-emerald-900/50 p-6 rounded-lg border border-green-700">
            <h3 className="text-xl font-semibold text-green-300 mb-4">🔍 DQL - Data Query</h3>
            <div className="bg-gray-900/50 p-3 rounded border border-gray-700">
              <strong className="text-purple-400">SELECT</strong> - Interroga i dati
            </div>
            <div className="text-gray-300 text-sm mt-3">
              Il comando più importante e utilizzato in SQL
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 p-6 rounded-lg border border-purple-700">
          <h3 className="text-xl font-semibold text-purple-300 mb-4">💡 Differenze Chiave</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-300">
            <div>
              <strong className="text-blue-400">DML:</strong>
              <ul className="text-sm mt-2 space-y-1">
                <li>• Modifica il database</li>
                <li>• Cambia i dati permanentemente</li>
                <li>• Richiede permessi di scrittura</li>
              </ul>
            </div>
            <div>
              <strong className="text-green-400">DQL:</strong>
              <ul className="text-sm mt-2 space-y-1">
                <li>• Solo lettura</li>
                <li>• Non modifica nulla</li>
                <li>• Sicuro da usare</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  },

  // Slide 11 - DQL - Data Query Language
  {
    id: 11,
    title: "DQL - Data Query Language",
    category: "sqlite",
    content: (
      <div className="space-y-6">
        <div className="text-center">
          <Search size={64} className="text-green-400 mb-4 mx-auto" />
          <h2 className="text-3xl font-bold text-green-300 mb-4">Il Potere di SELECT</h2>
          <p className="text-gray-400">Tutto quello che puoi fare con una query</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-blue-900/50 to-indigo-900/50 p-6 rounded-lg border border-blue-700">
            <h3 className="text-xl font-semibold text-blue-300 mb-4">🔍 SELECT Base</h3>
            <div className="bg-gray-900/50 p-4 rounded border border-gray-700">
              <code className="text-green-400 text-sm">
                SELECT colonna1, colonna2<br/>
                FROM tabella<br/>
                WHERE condizione<br/>
                ORDER BY colonna1;
              </code>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-900/50 to-emerald-900/50 p-6 rounded-lg border border-green-700">
            <h3 className="text-xl font-semibold text-green-300 mb-4">⭐ SELECT Avanzato</h3>
            <div className="bg-gray-900/50 p-4 rounded border border-gray-700">
              <code className="text-green-400 text-sm">
                SELECT COUNT(*), AVG(anno)<br/>
                FROM libri<br/>
                WHERE genere = 'Fantasy'<br/>
                GROUP BY autore<br/>
                HAVING COUNT(*) &gt; 2;
              </code>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 p-6 rounded-lg border border-purple-700">
          <h3 className="text-xl font-semibold text-purple-300 mb-4">🛠️ Clausole Principali</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm text-gray-300">
            <div><strong className="text-blue-400">SELECT</strong> - Cosa selezionare</div>
            <div><strong className="text-green-400">FROM</strong> - Da quale tabella</div>
            <div><strong className="text-yellow-400">WHERE</strong> - Condizioni di filtro</div>
            <div><strong className="text-purple-400">GROUP BY</strong> - Raggruppa risultati</div>
            <div><strong className="text-red-400">HAVING</strong> - Filtra gruppi</div>
            <div><strong className="text-cyan-400">ORDER BY</strong> - Ordina risultati</div>
          </div>
        </div>
      </div>
    )
  },

  // Slide 12 - Vincoli e Chiavi
  {
    id: 12,
    title: "DB Browser for SQLite - Il Nostro Strumento di Laboratorio",
    category: "sqlite",
    content: (
      <div className="space-y-6">
        <div className="text-center">
          <Monitor size={80} className="text-blue-400 mb-4 mx-auto animate-pulse" />
          <h2 className="text-3xl font-bold text-blue-300 mb-4">DB Browser for SQLite</h2>
          <p className="text-gray-400 text-lg">Interfaccia grafica per gestire database SQLite</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-blue-900/50 to-indigo-900/50 p-6 rounded-lg border border-blue-700">
            <h3 className="text-xl font-semibold text-blue-300 mb-4 flex items-center">
              <Download className="mr-2" size={24} />
              Installazione
            </h3>
            <div className="space-y-3">
              <div className="bg-gray-900/50 p-3 rounded border border-gray-700">
                <div className="text-sm text-gray-400 mb-2">🪟 Windows:</div>
                <div className="text-xs text-gray-300">
                  Scarica il file .msi da sqlitebrowser.org<br/>
                  Installazione guidata automatica
                </div>
              </div>
              <div className="bg-gray-900/50 p-3 rounded border border-gray-700">
                <div className="text-sm text-gray-400 mb-2">🍎 macOS:</div>
                <div className="text-xs text-gray-300">
                  <code className="text-green-400">brew install --cask db-browser-for-sqlite</code><br/>
                  oppure scarica il .dmg dal sito
                </div>
              </div>
              <div className="bg-gray-900/50 p-3 rounded border border-gray-700">
                <div className="text-sm text-gray-400 mb-2">🐧 Linux:</div>
                <div className="text-xs text-gray-300">
                  <code className="text-green-400">sudo apt install sqlitebrowser</code><br/>
                  (Ubuntu/Debian)
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-900/50 to-emerald-900/50 p-6 rounded-lg border border-green-700">
            <h3 className="text-xl font-semibold text-green-300 mb-4">✨ Caratteristiche Principali</h3>
            <div className="space-y-2 text-gray-300 text-sm">
              <div className="flex items-center">
                <span className="text-green-400 mr-2">•</span>
                <strong>Interfaccia visuale</strong> per creare tabelle
              </div>
              <div className="flex items-center">
                <span className="text-green-400 mr-2">•</span>
                <strong>Editor SQL</strong> con evidenziazione sintassi
              </div>
              <div className="flex items-center">
                <span className="text-green-400 mr-2">•</span>
                <strong>Visualizzazione dati</strong> in formato tabella
              </div>
              <div className="flex items-center">
                <span className="text-green-400 mr-2">•</span>
                <strong>Import/Export</strong> CSV, JSON, SQL
              </div>
              <div className="flex items-center">
                <span className="text-green-400 mr-2">•</span>
                <strong>Schema visuale</strong> delle relazioni
              </div>
              <div className="flex items-center">
                <span className="text-green-400 mr-2">•</span>
                <strong>Backup e restore</strong> automatici
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 p-4 rounded-lg border border-purple-700">
            <h4 className="text-lg font-semibold text-purple-300 mb-3">🗃️ Struttura Database</h4>
            <div className="text-gray-300 text-sm">
              Visualizza e modifica lo schema delle tabelle con interfaccia drag &amp; drop
            </div>
          </div>

          <div className="bg-gradient-to-br from-cyan-900/50 to-blue-900/50 p-4 rounded-lg border border-cyan-700">
            <h4 className="text-lg font-semibold text-cyan-300 mb-3">📝 Query SQL</h4>
            <div className="text-gray-300 text-sm">
              Editor con completamento automatico e evidenziazione degli errori
            </div>
          </div>

          <div className="bg-gradient-to-br from-orange-900/50 to-red-900/50 p-4 rounded-lg border border-orange-700">
            <h4 className="text-lg font-semibold text-orange-300 mb-3">📊 Dati</h4>
            <div className="text-gray-300 text-sm">
              Modifica diretta dei dati con validazione automatica dei tipi
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-yellow-900/50 to-amber-900/50 p-6 rounded-lg border border-yellow-700">
          <h3 className="text-xl font-semibold text-yellow-300 mb-3 flex items-center">
            <ExternalLink className="mr-2" size={24} />
            Perché Lo Usiamo in Laboratorio
          </h3>
          <div className="text-gray-300">
            <p className="mb-3">
              DB Browser rende SQLite accessibile agli studenti fornendo:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <strong className="text-yellow-300">✅ Vantaggi didattici:</strong>
                <ul className="text-sm mt-2 space-y-1">
                  <li>• Visualizzazione immediata dei risultati</li>
                  <li>• Correzione degli errori facilitata</li>
                  <li>• Comprensione delle relazioni tra tabelle</li>
                </ul>
              </div>
              <div>
                <strong className="text-yellow-300">🎯 Perfetto per:</strong>
                <ul className="text-sm mt-2 space-y-1">
                  <li>• Principianti che imparano SQL</li>
                  <li>• Progetti scolastici e prototipi</li>
                  <li>• Debugging e analisi dati</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
];