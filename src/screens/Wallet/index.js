import React, { useState, useCallback } from "react";
import {
  Feather,
  MaterialCommunityIcons,
  FontAwesome,
  AntDesign,
} from "@expo/vector-icons";
import { Switch } from "react-native";

import {
  Wrapper,
  Header,
  HeaderContainer,
  Title,
  BalanceContainer,
  Value,
  Bold,
  EyeButton,
  Info,
  Actions,
  Action,
  ActionLabel,
  UseBalance,
  UseBalanceTitle,
  PaymentMethods,
  PaymentMethodTitle,
  Card,
  CardBody,
  CardDetails,
  CardTitle,
  CardInfo,
  Img,
  AddButton,
  AddLabel,
  UseTicketContainer,
  UseTicketButton,
  UseTicketLabel,
} from "./styles";

import creditCard from "../../assets/images/credit-card.png";

export default function Wallet() {
  const [isVisible, setIsVisible] = useState(true);
  const [useBalance, setUseBalance] = useState(true);

  const handleToggleVisibility = useCallback(() => {
    setIsVisible((prevState) => !prevState);
  }, []);

  const handleToggleUseBalance = useCallback(() => {
    setUseBalance((prevState) => !prevState);
  }, []);

  return (
    <Wrapper>
      <Header
        colors={useBalance ? ["#52e78c", "#1ab563"] : ["#d3d3d3", "#868686"]}
        start={[1, 0.2]}
      >
        <HeaderContainer>
          <Title>Saldo PicPay</Title>

          <BalanceContainer>
            <Value>
              R$ <Bold>{isVisible ? "0,00" : "-----"}</Bold>
            </Value>
            <EyeButton onPress={handleToggleVisibility}>
              <Feather
                name={isVisible ? "eye" : "eye-off"}
                size={28}
                color="#fff"
              />
            </EyeButton>
          </BalanceContainer>

          <Info>Seu saldo está rendendo 100% do CDI</Info>

          <Actions>
            <Action>
              <MaterialCommunityIcons name="cash" size={28} color="#fff" />
              <ActionLabel>Adicionar</ActionLabel>
            </Action>
            <Action>
              <FontAwesome name="bank" size={20} color="#fff" />
              <ActionLabel>Adicionar</ActionLabel>
            </Action>
          </Actions>
        </HeaderContainer>
      </Header>

      <UseBalance>
        <UseBalanceTitle>Usar saldo ao pagar</UseBalanceTitle>
        <Switch value={useBalance} onValueChange={handleToggleUseBalance} />
      </UseBalance>

      <PaymentMethods>
        <PaymentMethodTitle>Formas de pagamento:</PaymentMethodTitle>

        <Card>
          <CardBody>
            <CardDetails>
              <CardTitle>Cadastre o seu cartão de crédito</CardTitle>
              <CardInfo>
                Cadastre o seu cartão de crédito para poder fazer pagamentos
                mesmo quando não tiver saldo no seu PicPay.
              </CardInfo>
            </CardDetails>
            <Img source={creditCard} resizeMode="contain" />
          </CardBody>
          <AddButton onPress={() => {}}>
            <AntDesign name="pluscircleo" size={30} color="#0db060" />
            <AddLabel>Adicionar cartão de crédito</AddLabel>
          </AddButton>
        </Card>

        <UseTicketContainer>
          <UseTicketButton onPress={() => {}}>
            <MaterialCommunityIcons
              name="ticket-outline"
              size={20}
              color="#0db060"
            />
            <UseTicketLabel>Usar código promocional</UseTicketLabel>
          </UseTicketButton>
        </UseTicketContainer>
      </PaymentMethods>
    </Wrapper>
  );
}
