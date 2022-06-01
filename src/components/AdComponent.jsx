import React from "react";
import styled from "styled-components";
import { MdChevronRight } from "react-icons/md";

const AdComponent = () => {
  return (
    <Container>
      <CardContainer>
        <Card1>
          <Title>
            Explore <StrongText>Classifieds</StrongText>
          </Title>
          <BottomContainer>
            <Text>Over 5000 + Products</Text>
            <NavigationContainer>
              <MdChevronRight size={25} />
            </NavigationContainer>
          </BottomContainer>
        </Card1>
        <Card2>
          <Title>
            Add <StrongText>Classifieds</StrongText>
          </Title>
          <BottomContainer>
            <Text>ads, event ads service requests etc</Text>
            <NavigationContainer>
              <MdChevronRight size={25} />
            </NavigationContainer>
          </BottomContainer>
        </Card2>
        <Card3>
          <Title>
            Explore <StrongText>Products</StrongText>
          </Title>
          <BottomContainer>
            <Text>Over 25000 + Products</Text>
            <NavigationContainer>
              <MdChevronRight size={25} />
            </NavigationContainer>
          </BottomContainer>
        </Card3>
        <Card4>
          <Title>
            Partner <StrongText>With us</StrongText>
          </Title>
          <BottomContainer>
            <Text>Sell your products</Text>
            <NavigationContainer>
              <MdChevronRight size={25} />
            </NavigationContainer>
          </BottomContainer>
        </Card4>
      </CardContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 1920px;
  height: 870px;
`;

const CardContainer = styled.div`
  width: 100%;
  /* padding: 0 150px; */
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin: -23px -23px 0 -23px;
`;

const Card1 = styled.div`
  width: 778px;
  height: 412px;
  margin: 23px 23px;
  border-radius: 30px;
  background: url("https://s3-alpha-sig.figma.com/img/2971/acc4/0f4f994806b87f68f974244b5593dc76?Expires=1655078400&Signature=KVnCNDpWmhD69yZcfdcjMJ19yKh2GylRyOYPbFJo3TShT7Bdcn97Ckg8PdAxJtUJPORFuu08VAaUIsWBa2HC2SsUilYXPLa4TtKwb2sjnMHffYyOID0PvU203GRGox03HOyvpxv7tK9HsmCUaPHGyqvsjKi84mvTf~w2hMGw96EP4IDFf8ccJvT8yz1eBm0Px1C-gNSUGwwe9wbLst~K-~KiE2ap1A7SRohsPIPl8Pt1jwVT4FCWAKAkntvfiY1lG-f~Ws2yR-VpRsANj94L2hWXpHnL~607W0xVLHc~AUZEy2hsai6PysLYxHNThHcJyS6egkMx5dfENYu9zV5OQA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA");
  background-size: contain;
  object-fit: fill;
  display: flex;
  flex-direction: column;
  /* justify-content: space-around;
  align-items: center; */
`;
const Card2 = styled.div`
  width: 778px;
  height: 412px;
  margin: 23px 23px;
  border-radius: 30px;
  background: url("https://s3-alpha-sig.figma.com/img/18d7/aa25/defe54c0aa4c11484ea4f826f69039fa?Expires=1655078400&Signature=hkvpA~pyaBb7Bv6BTRRwfYtszu8sq5DmETnwPCE-UquY0OuiJryBllfEdlV2kLmOXY1tQByU4jhtklIBGx8DKI-empeK7DWGJl24208mp9~gzzGy7HtHcgWDMGmePCrh0fm1XQLPOfzEiAEFsPhzfVbQTghqm~XvwDkXKmAcpSHKfvMKnDDtKrnPILVKypz707iVuicuMfP5JOy6fDZGCsCiWkaRjuABrozRR7dpC~T04enaVQAKUerOKyeMng4GO8cHgqsp2WT-hq4aaNw9dPwzh5ggORCFo9mGJC3eM6klu774sUu-AlPF~S-JETuhJhASf8h2dTuxH3wXerZhmw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA");
  background-size: contain;
  object-fit: fill;
  display: flex;
  flex-direction: column;
`;
const Card3 = styled.div`
  width: 778px;
  height: 412px;
  margin: 23px 23px;
  border-radius: 30px;
  background: url("https://s3-alpha-sig.figma.com/img/1927/a4ac/afc8faef860aef0d52ce87afd118b973?Expires=1655078400&Signature=as~PpafMv5mAwKdrHZPj-KgNqeuv7KgWdtcVqTFzG3D0tSOEHYABnJzf0vsYPkrZ2Vkr0AsnAEIgsHF~cCpwqmHhE0Mbj2KnK7g5KWc6RaBgcJ5xtH9yV7UOd-J9j99JKCVXtUVzLWdXtd4pe5Hq~RNCHCUIJ27UopkuE~N2EvUHHf2ap571gOCe4uZhspl4A1fwPBStoX~gy~78zphhcSoDfPbZLeK8wDk5WICYIbIrF94GkNolQP8S3cMq4fTnTYaOU4juIZQbeaY1rDPoshpMmRvn3YxUItk2NAJcw6Yk9m3-IVKuvFqOq2OTeFl44TAr73mGUIyvK-ZZdwHk~w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA");
  background-size: contain;
  object-fit: fill;
  display: flex;
  flex-direction: column;
`;
const Card4 = styled.div`
  width: 778px;
  height: 412px;
  margin: 23px 23px;
  border-radius: 30px;
  background: url("https://s3-alpha-sig.figma.com/img/fc79/f59e/82620880a99ec3bc81bc0476fd7b7ddb?Expires=1655078400&Signature=W-4ap8juajDe~woV4SZi7pttFDTuRsv6KMdbn9ua1lOqjuB2fVOQkEe9TAoZdMHLJyac-gTO-7bOWEmEVXyEF6sFi5LhEtYMf-21L~jsk3U6k-~neFy9o3TsFmGMXgP7KkQeBI5BILmkQ0DHVSSCoYuwRKpLJvWLJFWt~LJxgOB-GIQBh-HpGc~iWnJoWZyt6~eprJGXnfPbosRzfiTD5eE1K7V5p21BMnICN2NFxN~PPB7TKVLxXr2GXP9pLIBtwRNTYwLkkKaaloY2wC4qf6IBoCkNkNb9BBQkZrctqxWNnLoWPghkna3T~n54hGKjN9jkBJfWboJNMr30vEbZZw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA");
  background-size: contain;
  object-fit: fill;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h3`
  font-weight: 275;
  font-size: 54px;
  line-height: 110.8%;
  width: 512px;
  height: 120px;
  color: ${({ theme }) => theme.secondaryBackgroundColor};
  margin-top: 35px;
  margin-left: 67px;
`;

const StrongText = styled.h3`
  font-weight: 600;
`;

const BottomContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  margin-top: 142px;
  margin-left: 67px;
  margin-right: 67px;
`;

const Text = styled.span`
  font-weight: 300;
  font-size: 37px;
  line-height: 110.8%;
  text-transform: capitalize;
  color: ${({ theme }) => theme.secondaryBackgroundColor};
`;

const NavigationContainer = styled.div`
  background: transparent;
  width: 48px;
  height: 48px;
  border: 1px solid #f8f8f8;
  box-sizing: border-box;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;

export default AdComponent;
