// 초기값 설정
const initialState = {
  text: localStorage.getItem("texts") || [],
};
console.log(initialState);

const texts = (state = initialState, action) => {
  switch (action.type) {
    case "onAddText":
      return {
        //기존 객체 복사 + texts에 전달인자 값 추가
        ...state,
        text: [...state.text, action.payload],
      };
    default:
      return state;
  }
};

export default texts;
