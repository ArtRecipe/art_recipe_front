import styled from "styled-components";

export const CreateWrap = styled.div`
    margin-top: 7rem;
`;

export const CreateAdvice= styled.div`
    margin-bottom: 4rem;
  text-align: center;
`;

export const ContentWrap = styled.div`
  margin: 0 10rem 4rem;
`;

export const Form = styled.form`
  display: flex;
  justify-content: space-between;
`;

// export const PostImageWrap = styled.div`
    //display: flex;
    //flex-direction: column;
  //width: 30%;
// `;

export const PostImage = styled.div`
    width: 30%;
  height: 500px;
    border: 1px solid black;
    & input {
      display: none;
    }
    background-color: #6C6C6C;

    text-align: center;
    line-height: 12rem;
  
    &:hover {
      cursor: pointer;
    }
`;

export const PlusImg = styled.img`
    width: 50%;
`;

export const MinusImg = styled.img`
    width: 50%;
`;

  export const PostPreview = styled.img`
    width: 100%;
  `;

export const PostContent = styled.div`
    width: 50%;
`;

export const PostContentWrap = styled.div`
    width: 100%;
  
    & input {
      width: 100%;
      padding: 1rem;
      background-color: #C4C4C4;
      border: none;
      border-radius: 0.35rem;
      margin-top: 1rem;
    }
  
    & input:focus {
      outline: none;
    }
  
    & input::placeholder {
      color: #fff;
    }
  
    &:not(:first-child){
      margin-top: 2rem;
    }
`;

export const Title = styled.label`
  font-size: 1.5rem;
`;

export const PostMaterialSubTitle = styled.div`
    font-weight: lighter;
  font-size: 0.9rem;
  margin-top: 0.5rem;
`;

export const IngredientInputWrap = styled.div`
    
`;

export const IngredientInputTop = styled.div`
    display: flex;
    justify-content: space-between;
    
    & input:nth-child(2n-1) {
      width: 33%;
    }

      & input:nth-child(2n) {
        width: 66%;
      }
`;

export const IngredientPlusBtn = styled.div`
    width: 100%;
  height: 3rem;
  background-color: #C4C4C4;
  border-radius: 0.35rem;
  margin-top: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  
  &:hover {
    cursor: pointer;
  }
`;



export const PostBtnWrap = styled.div`
  margin: 5rem 2rem 0;
  display: flex;
  justify-content: space-between;
`;

export const PostSaveBtn = styled.button`
  width: 10rem;
  height: 3rem;
  background-color: #fff;
  border: 1px solid #C4C4C4;
  color: #C4C4C4;
  border-radius: 0.35rem;
  font-size: 1.3rem;
  
  &:hover {
    cursor: pointer;
    background-color: #C4C4C4;
    color: #ffff;
  }
`;

export const PostCancelBtn = styled.button`
  width: 10rem;
  height: 3rem;
  background-color: #fff;
  border: 1px solid #C4C4C4;
  color: #C4C4C4;
  border-radius: 0.35rem;
  font-size: 1.3rem;

  &:hover {
    cursor: pointer;
    background-color: #C4C4C4;
    color: #ffff;
  }

`;