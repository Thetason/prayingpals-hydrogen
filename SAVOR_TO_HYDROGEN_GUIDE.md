# 🎨 Savor Theme → Hydrogen 기능 마이그레이션 가이드

## ✅ Savor의 모든 기능을 Hydrogen에서 구현 가능합니다!

---

## 1️⃣ 선물 메시지 기능

### Savor (Liquid)에서:
```liquid
<input name="properties[선물 메시지]" />
```

### Hydrogen에서:
```tsx
// 1. GiftMessage 컴포넌트 사용 (이미 생성됨)
import { GiftMessage } from '~/components/GiftMessage';

// 2. 상품 상세 페이지에서
const [giftMessage, setGiftMessage] = useState('');

<GiftMessage onMessageChange={setGiftMessage} />

// 3. 장바구니에 추가할 때
<AddToCartButton
  lines={[
    {
      merchandiseId: selectedVariant.id,
      quantity: 1,
      attributes: [
        { key: '선물 메시지', value: giftMessage },
        { key: '_선물 포장', value: '예' },
      ],
    },
  ]}
>
  장바구니에 추가
</AddToCartButton>
```

**결과**: Shopify 주문에 자동으로 포함됨!

---

## 2️⃣ 재고 관리

### Savor에서:
```liquid
{% if product.available %}
  재고 있음
{% else %}
  품절
{% endif %}
```

### Hydrogen에서:
```tsx
// GraphQL 쿼리로 실시간 재고 확인
const { product } = useLoaderData<typeof loader>();

{product.availableForSale ? (
  <span className="text-green-600">재고 있음</span>
) : (
  <span className="text-red-600">품절</span>
)}

// 재고 수량 표시
{product.quantityAvailable && (
  <p>남은 수량: {product.quantityAvailable}개</p>
)}
```

---

## 3️⃣ 제품 옵션 (사이즈, 색상 등)

### Savor에서:
```liquid
{% for option in product.options %}
  <select name="id">
    {% for value in option.values %}
      <option>{{ value }}</option>
    {% endfor %}
  </select>
{% endfor %}
```

### Hydrogen에서:
```tsx
// 이미 구현되어 있음! (products.$productHandle.tsx)
<ProductOptions
  options={product.options}
  selectedVariant={selectedVariant}
/>

// 커스텀 스타일로 변경 가능
{product.options.map((option) => (
  <div key={option.name} className="mb-4">
    <label className="text-lg font-bold">{option.name}</label>
    <div className="flex gap-2 mt-2">
      {option.values.map((value) => (
        <button
          key={value}
          className="px-4 py-2 border rounded-lg hover:bg-purple-100"
        >
          {value}
        </button>
      ))}
    </div>
  </div>
))}
```

---

## 4️⃣ SNS 채널 임베디드

### Instagram Feed 예시:
```tsx
// components/InstagramFeed.tsx
export function InstagramFeed() {
  return (
    <div className="instagram-section">
      <h2>Instagram에서 우리를 만나보세요!</h2>

      {/* 방법 1: Instagram Embed API */}
      <iframe
        src="https://www.instagram.com/prayingpals/embed"
        width="100%"
        height="600"
      />

      {/* 방법 2: 커스텀 그리드 */}
      <div className="grid grid-cols-3 gap-4">
        {instagramPosts.map(post => (
          <a href={post.url} target="_blank">
            <img src={post.image} alt={post.caption} />
          </a>
        ))}
      </div>
    </div>
  );
}
```

### YouTube 임베디드:
```tsx
<iframe
  width="560"
  height="315"
  src="https://www.youtube.com/embed/VIDEO_ID"
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
/>
```

---

## 5️⃣ 제품 업로드 및 관리

### ⚠️ 중요:
- **제품 업로드**: Shopify Admin에서 그대로 사용
- **Hydrogen**: Admin의 데이터를 자동으로 가져옴

```
Shopify Admin (제품 추가)
    ↓
Storefront API
    ↓
Hydrogen (자동 반영)
```

**장점**: Admin에서 Savor처럼 쉽게 관리 + Hydrogen의 아름다운 UI

---

## 6️⃣ 장바구니 & 체크아웃

### Hydrogen 장바구니:
```tsx
// 이미 구현되어 있음!
import { Cart } from '~/components/Cart';

// Shopify Checkout으로 자동 연결
<Link to="/cart">장바구니 보기</Link>
```

### 체크아웃:
- Shopify의 기본 체크아웃 사용 (안전하고 PCI 인증됨)
- 또는 Custom Checkout (Shopify Plus 필요)

---

## 7️⃣ 메타필드 (추가 정보)

### Savor에서:
```liquid
{{ product.metafields.custom.care_instructions }}
```

### Hydrogen에서:
```tsx
// GraphQL 쿼리에 metafields 추가
const PRODUCT_QUERY = `
  query Product($handle: String!) {
    product(handle: $handle) {
      id
      title
      careInstructions: metafield(namespace: "custom", key: "care_instructions") {
        value
      }
    }
  }
`;

// 사용
{product.careInstructions?.value && (
  <div className="care-instructions">
    <h3>관리 방법</h3>
    <p>{product.careInstructions.value}</p>
  </div>
)}
```

---

## 8️⃣ 할인 코드

### Hydrogen에서:
```tsx
// 이미 routes에 있음: ($locale).discount.$code.tsx
<Link to="/discount/SUMMER2024">
  할인 쿠폰 적용하기
</Link>

// 수동 입력
<input
  type="text"
  placeholder="할인 코드 입력"
  onChange={(e) => applyDiscount(e.target.value)}
/>
```

---

## 9️⃣ 리뷰 시스템

### 구현 방법:
```tsx
// components/ProductReviews.tsx
export function ProductReviews({ productId }: { productId: string }) {
  const [reviews, setReviews] = useState([]);

  // Option 1: Shopify Product Reviews 앱 사용
  // Option 2: 커스텀 리뷰 시스템 (Metaobjects)
  // Option 3: 외부 서비스 (Yotpo, Judge.me)

  return (
    <div className="reviews">
      <h3>고객 리뷰</h3>
      {reviews.map(review => (
        <div key={review.id} className="review-card">
          <div className="stars">⭐⭐⭐⭐⭐</div>
          <p>{review.text}</p>
          <span>{review.author}</span>
        </div>
      ))}
    </div>
  );
}
```

---

## 🎯 결론: Savor vs Hydrogen 비교

| 기능 | Savor Theme | Hydrogen |
|------|------------|----------|
| **UI 자유도** | ⭐⭐⭐ (제한적) | ⭐⭐⭐⭐⭐ (완전 자유) |
| **애니메이션** | ⭐⭐ (CSS only) | ⭐⭐⭐⭐⭐ (Framer Motion) |
| **커스텀 기능** | ⭐⭐⭐ (Liquid 제약) | ⭐⭐⭐⭐⭐ (React 생태계) |
| **Admin 관리** | ⭐⭐⭐⭐⭐ (쉬움) | ⭐⭐⭐⭐⭐ (동일) |
| **재고/주문** | ⭐⭐⭐⭐⭐ (자동) | ⭐⭐⭐⭐⭐ (API 연동) |
| **선물 메시지** | ⭐⭐⭐⭐⭐ (기본) | ⭐⭐⭐⭐⭐ (attributes) |
| **SNS 임베디드** | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ (더 유연) |
| **성능** | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ (최적화) |

---

## ✅ 권장 사항

### **방법 1: Full Hydrogen** ⭐ 추천!

```
모든 페이지를 Hydrogen으로 구현
↓
Shopify Admin은 백엔드로만 사용
↓
완벽한 브랜딩 & 성능 & 기능
```

**장점**:
- 🎨 우리가 만든 아름다운 UI 100% 유지
- ⚡ 최고의 성능
- 🔧 무한한 확장 가능성

**단점**:
- 초기 개발 시간 (하지만 이미 80% 완성!)

### **방법 2: 하이브리드** (임시)

```
메인/스토리: Hydrogen (localhost:3001)
상품 상세/체크아웃: Savor (임시)
↓
점진적으로 Hydrogen으로 이동
```

---

## 🚀 다음 단계

1. **선물 메시지** 기능 추가 (GiftMessage 컴포넌트 이미 생성됨)
2. **상품 옵션** 스타일링 개선
3. **Instagram Feed** 추가
4. **리뷰 시스템** 통합
5. **할인 코드** UI 개선

무엇부터 시작하시겠어요? 🎨
