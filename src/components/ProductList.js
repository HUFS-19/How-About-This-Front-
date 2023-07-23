import ProductBlock from '../components/ProductBlock';

import '../styles/components/_ProductList.scss';

const ProductList = () => {
  const productDummyData = [
    { id: 0, name: '미니 선풍기' },
    { id: 1, name: '강아지 산책 줄' },
    { id: 2, name: '귀요미 인형' },
    { id: 3, name: '무선 충전기' },
    { id: 4, name: 'MP3' },
    { id: 5, name: '립밤' },
    { id: 6, name: '휴대용 컵반' },
    { id: 7, name: 'LED 거울' },
    { id: 8, name: '무한 핸드크림' },
    { id: 9, name: '쓱싹 가위' },
  ];

  return (
    <div className='ProductList'>
      <div className='ProductList-wrapper'>
        <div className='ProductList_topbar'>
          <h1>전체 목록</h1>
          <select>
            <option>좋아요순</option>
            <option>최신순</option>
            <option>오래된순</option>
          </select>
        </div>
        <section className='ProductList_content'>
          {productDummyData.map((data) => (
            <ProductBlock key={data.id} data={data} />
          ))}
        </section>
      </div>
    </div>
  );
};

export default ProductList;
