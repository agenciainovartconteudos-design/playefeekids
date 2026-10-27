import { useState } from "react";
import {
  Target,
  ChartNoAxesCombined,
  Compass,
  Check,
  CheckCircle2,
  Mail,
  TrendingUp,
  Layers,
} from "lucide-react";
import type { TemplateProps } from "../types";
import { list } from "../types";
import {
  WebsiteNav,
  Button,
  SectionHead,
  Footer,
  FAQ,
  Badge,
  useToast,
  Brand,
} from "../shared/ui";
export default function Leadgen({ config }: TemplateProps) {
  const [sent, setSent] = useState(false);
  const toast = useToast();
  const focusForm = () =>
    document
      .getElementById("diagnostico")
      ?.scrollIntoView({ behavior: "smooth", block: "center" });
  return (
    <>
      <WebsiteNav
        config={config}
        links={[
          { label: "Como funciona", href: "#processo" },
          { label: "O que você recebe", href: "#beneficios" },
          { label: "Dúvidas", href: "#duvidas" },
        ]}
        cta="Quero meu diagnóstico"
        onAction={focusForm}
      />
      <main id="main" className="web-main">
        <section className="lead-hero">
          <div className="lead-hero-copy hero-enter">
            <Badge tone="accent">
              <span className="live-dot" />
              ESTRATÉGIA PARA O SEU PRÓXIMO PASSO
            </Badge>
            <h1 className="hero-title">{config.content.headline}</h1>
            <p className="hero-copy">{config.content.description}</p>
            <ul className="check-list">
              <li>
                <Check />
                Encontre as oportunidades do seu negócio
              </li>
              <li>
                <Check />
                Tenha prioridades claras para agir
              </li>
              <li>
                <Check />
                Construa um processo comercial consistente
              </li>
            </ul>
            <div className="lead-mini-chart">
              <div className="inline">
                <span className="big-icon">
                  <TrendingUp size={25} />
                </span>
                <div>
                  <b>Da visão à ação.</b>
                  <p>Um plano que conversa com a sua realidade.</p>
                </div>
              </div>
              <div className="lead-chart-bars" aria-hidden="true">
                {[26, 41, 35, 64, 73, 92, 100].map((h, i) => (
                  <i
                    key={i}
                    style={{ height: h, animationDelay: `${i * 0.08}s` }}
                  />
                ))}
              </div>
              <span>CLAREZA · DIREÇÃO · MOVIMENTO</span>
            </div>
          </div>
          <div
            className="lead-form-card hero-enter hero-delay"
            id="diagnostico"
          >
            {sent ? (
              <div className="success-card">
                <CheckCircle2 size={50} />
                <h2>Seu próximo passo está aqui.</h2>
                <p>
                  Solicitação demonstrativa registrada nesta tela. Nenhum
                  contato real será feito.
                </p>
                <Button onClick={() => setSent(false)}>
                  Experimentar novamente
                </Button>
              </div>
            ) : (
              <>
                <span className="eyebrow">VAMOS CONHECER SEU NEGÓCIO</span>
                <h2>
                  Uma conversa pode
                  <br />
                  mudar sua direção.
                </h2>
                <p>Preencha para experimentar o diagnóstico inicial.</p>
                <form
                  className="form-stack"
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSent(true);
                    toast("Formulário validado. Nenhum dado foi enviado.");
                  }}
                >
                  <label className="field">
                    <span>Seu nome</span>
                    <input placeholder="Como podemos chamar você?" required />
                  </label>
                  <label className="field">
                    <span>E-mail profissional</span>
                    <input
                      type="email"
                      placeholder="voce@empresa.com"
                      required
                    />
                  </label>
                  <label className="field">
                    <span>Nome da empresa</span>
                    <input placeholder="Seu negócio" required />
                  </label>
                  <label className="field">
                    <span>Seu maior desafio hoje</span>
                    <select required defaultValue="">
                      <option value="" disabled>
                        Selecione uma opção
                      </option>
                      <option>Gerar novas oportunidades</option>
                      <option>Organizar o processo comercial</option>
                      <option>Melhorar a comunicação</option>
                      <option>Planejar a próxima fase</option>
                    </select>
                  </label>
                  <label className="lead-consent">
                    <input type="checkbox" required />
                    Entendo que este formulário é uma demonstração local.
                  </label>
                  <Button type="submit" className="full">
                    Quero dar o próximo passo
                  </Button>
                </form>
                <span className="lead-form-note">
                  <Mail size={14} />
                  Use dados fictícios para testar o fluxo.
                </span>
              </>
            )}
          </div>
        </section>
        <section className="section lead-benefits" id="beneficios">
          <SectionHead
            eyebrow="DIREÇÃO EM CADA ETAPA"
            title="Menos dúvida. Mais movimento."
          />
          <div className="three-grid">
            {list(config, "benefits").map((b, i) => (
              <article className="feature-card" key={b.id} data-reveal>
                {
                  [
                    <Compass size={28} />,
                    <Target size={28} />,
                    <ChartNoAxesCombined size={28} />,
                  ][i]
                }
                <span className="hero-number">0{i + 1}</span>
                <h3>{b.title}</h3>
                <p>{b.description}</p>
              </article>
            ))}
          </div>
        </section>
        <section className="section" id="processo">
          <div className="lead-process">
            <div>
              <span className="eyebrow">
                SIMPLES DO INÍCIO AO PRÓXIMO PASSO
              </span>
              <h2>
                Um processo feito
                <br />
                para fazer sentido.
              </h2>
              <p>
                Entender, planejar e acompanhar. Sem complicar o que pode ser
                claro.
              </p>
              <Button onClick={focusForm}>Começar pelo diagnóstico</Button>
            </div>
            <div>
              {[
                "Você conta onde está",
                "A gente entende o cenário",
                "Construímos a próxima etapa",
              ].map((s, i) => (
                <div className="process-step" key={s}>
                  <span>0{i + 1}</span>
                  <div>
                    <h3>{s}</h3>
                    <p>
                      {
                        [
                          "Suas metas, seus desafios e o momento do negócio.",
                          "Uma visão cuidadosa dos pontos de melhoria.",
                          "Prioridades e ações para sair do lugar.",
                        ][i]
                      }
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="section" id="duvidas">
          <SectionHead
            eyebrow="ANTES DE COMEÇAR"
            title="Uma boa conversa começa com clareza."
          />
          <FAQ
            items={[
              {
                q: "Para quem é o diagnóstico?",
                a: "Para quem deseja organizar a operação comercial, melhorar a comunicação ou planejar uma nova etapa do negócio.",
              },
              {
                q: "O que acontece depois do formulário?",
                a: "Nesta demonstração, você verá uma confirmação local. No produto real, conecte o formulário ao seu CRM e ao seu processo de contato.",
              },
              {
                q: "Preciso ter tudo definido?",
                a: "Não. A conversa inicial serve para organizar o cenário e encontrar um ponto de partida.",
              },
            ]}
          />
        </section>
      </main>
      <Footer config={config} onContact={focusForm} />
    </>
  );
}
