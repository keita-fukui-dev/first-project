import styled from "styled-components";
import styles from "./BreadCrumbs.module.css";
import { useState } from "react";
// import type { MouseEvent } from "react";

type Props = {
  items: string[];
};

type NoticeParagraphProps = {
  $isBlank: boolean;
};

const NoticeParagraph = styled.p<NoticeParagraphProps>`
  font-weight: 100;
  color: ${(props) => (props.$isBlank ? "red" : "gray")};
`;

export const BreadCrumbs = ({ items }: Props) => {
  const [selectedValue, setSelectedValue] = useState("");

  // const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
  //   console.log(e);
  // };

  return (
    <>
      <p className={styles.listTitle}>パンくずリスト</p>
      {items.length === 0 ? (
        <NoticeParagraph $isBlank>itemがありません。</NoticeParagraph>
      ) : (
        <NoticeParagraph $isBlank={false}>
          itemが{items.length}あります
        </NoticeParagraph>
      )}
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          {items.map((item) => (
            <li key={item} className="breadcrumb-item">
              {item === selectedValue ? (
                <>{item}</>
              ) : (
                <a href="#" onClick={() => setSelectedValue(item)}>
                  {item}
                </a>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
};
