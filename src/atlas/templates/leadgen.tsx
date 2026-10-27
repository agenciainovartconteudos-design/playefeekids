import { useState } from "react";
import {
  BookOpenCheck,
  Smile,
  HeartHandshake,
  Check,
  CheckCircle2,
  Mail,
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
} from "../shared/ui";
import heroHighlight from "@/assets/upload-1793063399099-1.jpg";
import { supabase } from "@/integrations/supabase/client";
export default function Leadgen({ config }: TemplateProps) {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const toast = useToast();
  const focusForm = () =>
    document
      .getElementById("comprar")
      ?.scrollIntoView({ behavior: "smooth", block: "center" });
  return (
    <>
      <WebsiteNav
        config={config}
        links={[
          { label: "Benefícios", href: "#beneficios" },
          { label: "Como funciona", href: "#como-funciona" },
          { label: "Dúvidas", href: "#duvidas" },
        ]}
        cta="Quero garantir agora"
        onAction={focusForm}
      />
      <main id="main" className="web-main">
        <section className="lead-hero">
          <div className="lead-hero-copy hero-enter">
            <Badge tone="accent">
              <span className="live-dot" />
              {config.content.eyebrow}
            </Badge>
            <h1 className="hero-title">{config.content.headline}</h1>
            <p className="hero-copy">{config.content.description}</p>
            <ul className="check-list">
              <li>
                <Check />
                Mais de 30 atividades para imprimir ou usar no tablet
              </li>
              <li>
                <Check />
                Versículos bíblicos explicados em linguagem de criança
              </li>
              <li>
                <Check />
                Pensado para o dia a dia da família, sem complicar a rotina
              </li>
            </ul>
            <div className="lead-mini-chart">
              <img
                src={heroHighlight}
                alt="Cartaz do material Play e Fé Kids mostrando a atividade Memoriza Versículos, com fundo azul e letras douradas"
                style={{
                  width: "100%",
                  display: "block",
                  borderRadius: 10,
                }}
                loading="eager"
              />
              <span style={{ marginTop: 14, display: "block" }}>
                ASSIM É UMA DAS ATIVIDADES REAIS DO MATERIAL
              </span>
            </div>
          </div>
          <div className="lead-form-card hero-enter hero-delay" id="comprar">
            {sent ? (
              <div className="success-card">
                <CheckCircle2 size={50} />
                <h2>Seu pedido está garantido!</h2>
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
                <span className="eyebrow">GARANTA O SEU AGORA</span>
                <h2>
                  Leve a Palavra para
                  <br />o coração do seu filho.
                </h2>
                <p>Preencha para garantir acesso ao material completo.</p>
                <form
                  className="form-stack"
                  onSubmit={async (e) => {
                    e.preventDefault();
                    const data = new FormData(e.currentTarget);
                    const name = String(data.get("name") || "");
                    const email = String(data.get("email") || "");
                    const childAge = String(data.get("childAge") || "");
                    setLoading(true);
                    const { error } = await supabase.from("contact_messages").insert({
                      name,
                      email,
                      message: `Idade da criança: ${childAge}`,
                      source: "landing-play-e-fe-kids",
                    });
                    setLoading(false);
                    if (error) {
                      toast(
                        "Não conseguimos registrar agora. Tente novamente em instantes.",
                      );
                      return;
                    }
                    setSent(true);
                    toast("Pedido recebido! Em breve você receberá o material por e-mail.");
                  }}
                >
                  <label className="field">
                    <span>Seu nome</span>
                    <input
                      name="name"
                      placeholder="Como podemos chamar você?"
                      required
                    />
                  </label>
                  <label className="field">
                    <span>Seu melhor e-mail</span>
                    <input
                      name="email"
                      type="email"
                      placeholder="voce@email.com"
                      required
                    />
                  </label>
                  <label className="field">
                    <span>Idade da criança</span>
                    <select name="childAge" required defaultValue="">
                      <option value="" disabled>
                        Selecione uma opção
                      </option>
                      <option>4 a 6 anos</option>
                      <option>7 a 8 anos</option>
                      <option>9 a 10 anos</option>
                      <option>Mais de uma criança em casa</option>
                    </select>
                  </label>
                  <label className="lead-consent">
                    <input type="checkbox" required />
                    Concordo em receber contato sobre o material Play e Fé
                    Kids.
                  </label>
                  <Button type="submit" className="full" disabled={loading}>
                    {loading ? "Enviando..." : "Quero garantir meu acesso agora"}
                  </Button>
                </form>
                <span className="lead-form-note">
                  <Mail size={14} />
                  Seus dados ficam seguros e são usados apenas para enviar o
                  material.
                </span>
              </>
            )}
          </div>
        </section>
        <section className="section lead-benefits" id="beneficios">
          <SectionHead
            eyebrow="TUDO PENSADO PARA AS CRIANÇAS"
            title="Uma forma divertida de aprender a Palavra."
          />
          <div className="three-grid">
            {list(config, "benefits").map((b, i) => (
              <article className="feature-card" key={b.id} data-reveal>
                {
                  [
                    <BookOpenCheck size={28} />,
                    <Smile size={28} />,
                    <HeartHandshake size={28} />,
                  ][i]
                }
                <span className="hero-number">0{i + 1}</span>
                <h3>{b.title}</h3>
                <p>{b.description}</p>
              </article>
            ))}
          </div>
        </section>
        <section className="section" id="como-funciona">
          <div className="lead-process">
            <div>
              <span className="eyebrow">
                SIMPLES DO PEDIDO AO PRIMEIRO BRINCAR
              </span>
              <h2>
                Comece hoje mesmo,
                <br />
                em poucos minutos.
              </h2>
              <p>
                Garanta seu acesso, baixe o material e já comece a brincar e
                aprender com seu filho ainda hoje.
              </p>
              <Button onClick={focusForm}>Garantir meu acesso</Button>
            </div>
            <div>
              {[
                "Você garante seu acesso",
                "Recebe o material completo",
                "Brinca e aprende em família",
              ].map((s, i) => (
                <div className="process-step" key={s}>
                  <span>0{i + 1}</span>
                  <div>
                    <h3>{s}</h3>
                    <p>
                      {
                        [
                          "Preenchimento rápido e simples, direto nesta página.",
                          "Atividades, versículos e jogos prontos para usar.",
                          "Momentos leves que aproximam seu filho da fé.",
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
            eyebrow="ANTES DE GARANTIR O SEU"
            title="Tire suas dúvidas sobre o material."
          />
          <FAQ
            items={[
              {
                q: "Para qual idade é indicado?",
                a: "O material foi pensado para crianças de 4 a 10 anos, com atividades que se adaptam a diferentes fases.",
              },
              {
                q: "Preciso imprimir as atividades?",
                a: "Não. Você pode usar direto no tablet ou celular, ou imprimir se preferir atividades no papel.",
              },
              {
                q: "O que acontece depois do formulário?",
                a: "Nesta demonstração, você verá uma confirmação local. No produto real, conecte o formulário ao seu sistema de entrega.",
              },
            ]}
          />
        </section>
      </main>
      <Footer config={config} onContact={focusForm} />
    </>
  );
}
