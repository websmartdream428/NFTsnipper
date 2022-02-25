import PageTitle from "components/PageTitle";
import React from "react";
import styled from "styled-components";

import MintImg1 from "assets/image/mint1.jpg";
import ProtocolSvg from "assets/image/near-protocol-logo.svg";

const CollectionPart = () => {
  return (
    <CollectionWrapper>
      <PageTitle>All Collections</PageTitle>
      <CollectionTable>
        <thead>
          <tr>
            <th>#</th>
            <th className="text-left">COLLECTION</th>
            <th>FLOOR PRICE</th>
            <th>OWNERS</th>
            <th>SALES</th>
            <th>VOLUME</th>
            <th>MARKET CAP</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>
              <div className="collection-td">
                <img src={MintImg1} alt="MintImg1" />
                <div>
                  <h2>Antisocial Ape Club</h2>
                  <p>
                    <span>Supply: </span>3333
                  </p>
                </div>
              </div>
            </td>
            <td>
              <div className="price-td">
                <img src={ProtocolSvg} alt="ProtocolSvg" />
                11.50
              </div>
            </td>
            <td>1222</td>
            <td>
              55<span className="highlight-text danger">{"(-13)"}</span>
            </td>
            <td>
              $12,321<span className="highlight-text success">{"(+36%)"}</span>
            </td>
            <td>$852,321</td>
          </tr>
        </tbody>
      </CollectionTable>
    </CollectionWrapper>
  );
};

export default CollectionPart;

const CollectionWrapper = styled.div`
  margin-top: 5rem;
`;

const CollectionTable = styled.table`
  margin-top: 30px;
  border-collapse: collapse;
  table-layout: auto;
  width: 100%;
  text-align: right;
  .text-left {
    text-align: left;
  }
  tr {
    border-top: 1px solid #2a2d3e;
  }
  th {
    padding: 8px 24px 8px 1px;
    font-weight: 500;
    font-size: 0.75rem;
    line-height: 1rem;
    color: #999ba6;
    cursor: pointer;
  }
  td {
    padding: 12px 24px 12px 1px;
  }
  .collection-td {
    display: flex;
    align-items: center;
    img {
      width: 3.5rem;
      height: 3.5rem;
      object-fit: cover;
      border-radius: 0.375rem;
      margin-right: 16px;
    }
    h2,
    p {
      margin: 0;
      text-align: left;
    }
    h2 {
      font-weight: 500;
      margin-bottom: 0.25rem;
      font-size: 1rem;
      line-height: 1.5rem;
    }
    p {
      font-size: 0.63rem;
      line-height: 1rem;
      span {
        color: #999ba6;
        text-transform: uppercase;
      }
    }
  }
  .price-td {
    display: inline-flex;
    align-items: center;
    img {
      width: 16px;
      height: 16px;
      margin-right: 8px;
    }
    font-size: 1rem;
    line-height: 1.5rem;
  }
  .highlight-text {
    opacity: 0.8;
    font-size: 0.75rem;
    line-height: 1rem;
    margin-left: 4px;
  }
  .danger {
    color: #ff473e;
  }
  .success {
    color: #0eeba3;
  }
`;
