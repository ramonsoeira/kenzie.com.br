import React from "react";
import Layout from "@layout/default";
import Card from "@components/card";
import ScenarioCard from "@components/scenario-card";

import HeartIcon from "@icons/heart";
import JobMarketIcon from "@icons/job-market";
import PaymentIcon from "@icons/payment";

import "@styles/pages/payment.scss";

const Payment = () => {
  return (
    <Layout>
      <div className="page">
        <div className="container">
          <div className="column">
            <div class="page-head">
              <h3>Pagamento</h3>

              {/* prettier-ignore */}
              <p>
                A Kenzie confia no seu potencial, você não paga mensalidade até
                conseguir um trabalho com remuneração de <span className="is-bold">pelo menos R$ 3.000,00/mês.</span>
              </p>
            </div>
          </div>
        </div>

        <div class="kz-payment-section">
          <div class="container">
            <h3 className="kz-title">Como funciona</h3>

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
                  menos, R$ 3.000,00 você começa a pagar 17% da sua remuneração
                  para a Kenzie.
                </Card>
              </div>

              <div className="column">
                <Card icon={<PaymentIcon />} title="Pagamento" align="right">
                  O pagamento acontece nas seguintes situações: <br />
                  - Durante 60 meses ou <br />- Até chegar a R$ 48.000,00
                </Card>
              </div>
            </div>
          </div>
        </div>

        <div className="kz-payment-section">
          <div class="container">
            <h3 className="kz-title">Cenários</h3>

            <div className="columns is-justified-between">
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
      </div>
    </Layout>
  );
};

export default Payment;
