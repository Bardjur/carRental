import { BG, PageWrap, ContentWrap, NavBtn, Text, Title } from "./Home.styled";

export default function Home() {
  return (
    <BG>
      <PageWrap>
        <ContentWrap>
          <Title>Fill life with color with&nbsp;Autorent</Title>
          <Text>Make yourself happy, choose the car of your&nbsp;dreams</Text>
          <NavBtn type="button" to="/catalog">Сhoose a car</NavBtn>
        </ContentWrap>
      </PageWrap>
    </BG>
  )
}