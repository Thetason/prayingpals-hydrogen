import { useState } from 'react';

interface GiftMessageProps {
  onMessageChange: (message: string) => void;
}

export function GiftMessage({ onMessageChange }: GiftMessageProps) {
  const [message, setMessage] = useState('');
  const [recipient, setRecipient] = useState('');
  const [phone, setPhone] = useState('');

  const handleChange = () => {
    // Shopify Line Item Properties 형식으로 변환
    const fullMessage = `받는 분: ${recipient}\n연락처: ${phone}\n메시지: ${message}`;
    onMessageChange(fullMessage);
  };

  return (
    <div className="mt-8 p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl border border-purple-200">
      <h3 className="text-xl font-bold text-gray-800 mb-3">
        🎁 램비를 10분께 선물로 드리려고 해요
      </h3>

      <p className="text-sm text-gray-600 mb-4 leading-relaxed">
        이 인형을 누구에게, 어떤 순간에 전하고 싶으신가요?<br />
        그리고 그래에게 램비가 어떤 도움이 될 것 같으신가요? 낯선곳에서 힘 갈수 있어야 이야기 남겨주세요.<br />
        추첨을 통해 선정된 분들은 스페드는 인내로릴꺼예요.
      </p>

      <div className="space-y-4">
        {/* Name Input */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Name
          </label>
          <input
            type="text"
            value={recipient}
            onChange={(e) => {
              setRecipient(e.target.value);
              handleChange();
            }}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
            placeholder="받는 분의 이름을 입력해주세요"
          />
        </div>

        {/* Email Input */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Email
          </label>
          <input
            type="email"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
            placeholder="이메일 주소"
          />
        </div>

        {/* Phone Input */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Phone
          </label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => {
              setPhone(e.target.value);
              handleChange();
            }}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
            placeholder="연락처"
          />
        </div>

        {/* Comment Textarea */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Comment
          </label>
          <textarea
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
              handleChange();
            }}
            rows={6}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all resize-none"
            placeholder="선물 메시지를 입력해주세요..."
          />
        </div>

        {/* Send Button */}
        <button className="w-auto px-8 py-3 bg-gradient-to-r from-red-600 to-red-700 text-white font-medium rounded-lg hover:from-red-700 hover:to-red-800 transition-all shadow-md hover:shadow-lg">
          SEND
        </button>
      </div>

      {/* Preview */}
      {message && (
        <div className="mt-4 p-4 bg-white rounded-lg border border-purple-200">
          <p className="text-xs text-gray-500 mb-2">미리보기:</p>
          <p className="text-sm text-gray-700 whitespace-pre-line">
            {`받는 분: ${recipient}\n연락처: ${phone}\n메시지: ${message}`}
          </p>
        </div>
      )}
    </div>
  );
}
