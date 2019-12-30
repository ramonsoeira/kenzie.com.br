import React from "react";
import Layout from "@layout/default";
import Card from "@components/card";
import ScenarioCard from "@components/scenario-card";

import HeartIcon from "@icons/heart";
import JobMarketIcon from "@icons/job-market";
import PaymentIcon from "@icons/payment";

const Payment = props => {
  return (
    <Layout title="Pagamento | Kenzie Academy Brazil">
      <div className="kz-section has-text-centered">
        <div className="container">
          <div className="columns">
            <div className="column">
              <h3 className="kz-section-head-title">Pagamento</h3>

              {/* prettier-ignore */}
              <p className="kz-section-text">
                A Kenzie confia no seu potencial, por isso você não paga mensalidade até
                conseguir um trabalho com remuneração de <span className="is-bold">pelo menos R$ 3.000,00/mês.</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="kz-section">
        <div className="container">
          <div className="kz-section-head">
            <h3 className="kz-section-featured-title">Como funciona</h3>
          </div>

          <div className="columns is-justified-between">
            <div className="column">
              <Card
                icon={<HeartIcon />}
                title="Você não paga nada enquanto estuda"
                align="left"
              >
                Durante os 12 meses de estudo na Kenzie você não paga nenhum
                tipo de mensalidade. :)
              </Card>
            </div>

            <div className="column">
              <Card icon={<JobMarketIcon />} title="No mercado de Trabalho">
                Quando você estiver empregado com uma remuneração, de pelo
                menos, <span className="is-bold">R$ 3.000,00</span> você começa
                a pagar 17% da sua remuneração para a Kenzie.
              </Card>
            </div>

            <div className="column">
              {/* prettier-ignore */}
              <Card icon={<PaymentIcon />} title="Pagamento" align="right">
                O pagamento acontece nas seguintes situações: <br />
                - <span className="is-bold">60 meses</span> após concluir o curso ou <br />
                - Até chegar a <span className="is-bold">R$ 48.000,00</span>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <div className="kz-section">
        <div className="container">
          <div className="kz-section-head">
            <h3 className="kz-section-featured-title">Cenários</h3>
          </div>

          <div className="columns is-multiline is-justified-between">
            <div className="column">
              <ScenarioCard title="Cenário 1" salary="R$ 2.500,00" />
            </div>

            <div className="column">
              <ScenarioCard
                title="Cenário 2"
                salary="R$ 4.000,00"
                paymentAmount="R$ 680,00"
                paymentTerms="60 meses"
                total="R$ 40.800,00"
              />
            </div>

            <div className="column">
              <ScenarioCard
                title="Cenário 3"
                salary="R$ 7.000,00"
                paymentAmount="R$ 1.190,00"
                paymentTerms="41 meses"
                total="R$ 48.000,00"
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Payment;
