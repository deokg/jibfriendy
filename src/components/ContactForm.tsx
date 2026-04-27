"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { CheckCircle2, ArrowRight, Loader2 } from "lucide-react";

const PROJECT_TYPES = [
  "풀빌라 개발",
  "펜션 개발",
  "신축 (주택·상가)",
  "리모델링",
  "토지·부동산 컨설팅",
  "강의 문의",
  "기타",
];

const TIMELINE = [
  "즉시 시작 가능",
  "3개월 내",
  "6개월 내",
  "1년 내",
  "검토 단계",
];

type FormState = {
  name: string;
  phone: string;
  email: string;
  projectType: string;
  location: string;
  timeline: string;
  budget: string;
  message: string;
};

const initialForm: FormState = {
  name: "",
  phone: "",
  email: "",
  projectType: "",
  location: "",
  timeline: "",
  budget: "",
  message: "",
};

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">(
    "idle"
  );

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        throw new Error(data?.error || "발송에 실패했습니다.");
      }

      setStatus("success");
      setForm(initialForm);
    } catch (err) {
      setErrorMessage(
        err instanceof Error ? err.message : "발송에 실패했습니다."
      );
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-2xl border border-gold-300 p-12 text-center"
      >
        <div className="size-16 rounded-full bg-gold-100 flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="size-8 text-gold-600" />
        </div>
        <h3 className="text-2xl font-bold text-charcoal-900 mb-3">
          상담 신청이 접수되었습니다
        </h3>
        <p className="text-base text-muted leading-relaxed mb-8 max-w-md mx-auto">
          영업일 기준 1~2일 내에 직접 연락드립니다. 빠른 답변이 필요하시면
          연락처로 직접 전화 주셔도 됩니다.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="inline-flex items-center gap-2 text-sm font-semibold text-charcoal-900 border-b-2 border-charcoal-900 pb-1 hover:text-gold-600 hover:border-gold-600 transition-colors"
        >
          새 문의 작성하기
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* 이름 + 연락처 */}
      <div className="grid md:grid-cols-2 gap-6">
        <Field label="이름" required>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            placeholder="홍길동"
            className={inputClass}
          />
        </Field>
        <Field label="연락처" required>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            required
            placeholder="010-0000-0000"
            className={inputClass}
          />
        </Field>
      </div>

      {/* 이메일 */}
      <Field label="이메일">
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="email@example.com"
          className={inputClass}
        />
      </Field>

      {/* 프로젝트 유형 */}
      <Field label="문의 유형" required>
        <select
          name="projectType"
          value={form.projectType}
          onChange={handleChange}
          required
          className={inputClass}
        >
          <option value="">선택해주세요</option>
          {PROJECT_TYPES.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </Field>

      <div className="grid md:grid-cols-2 gap-6">
        <Field label="대지 위치 / 지역">
          <input
            type="text"
            name="location"
            value={form.location}
            onChange={handleChange}
            placeholder="예: 경주시 OO동 또는 미정"
            className={inputClass}
          />
        </Field>
        <Field label="예상 시기">
          <select
            name="timeline"
            value={form.timeline}
            onChange={handleChange}
            className={inputClass}
          >
            <option value="">선택해주세요</option>
            {TIMELINE.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <Field label="예상 예산 (선택)">
        <input
          type="text"
          name="budget"
          value={form.budget}
          onChange={handleChange}
          placeholder="예: 5억 ~ 10억"
          className={inputClass}
        />
      </Field>

      <Field label="문의 내용" required>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          required
          rows={6}
          placeholder="프로젝트의 목적, 토지 정보, 궁금한 점 등을 자유롭게 적어주세요."
          className={inputClass}
        />
      </Field>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-gold-500 hover:bg-gold-600 disabled:opacity-50 disabled:cursor-not-allowed px-8 py-4 text-base md:text-lg font-semibold text-white transition shadow-lg shadow-gold-500/30"
      >
        {status === "submitting" ? (
          <>
            <Loader2 className="size-5 animate-spin" />
            전송 중...
          </>
        ) : (
          <>
            상담 신청하기
            <ArrowRight className="size-5" />
          </>
        )}
      </button>

      {status === "error" && (
        <p className="text-sm text-red-600 text-center">
          {errorMessage || "전송에 실패했습니다. 잠시 후 다시 시도해주세요."}
        </p>
      )}

      <p className="text-xs text-muted text-center pt-4">
        제출하신 정보는 상담 목적으로만 사용되며, 별도 동의 없이 외부에 제공되지 않습니다.
      </p>
    </form>
  );
}

const inputClass =
  "w-full px-4 py-3 bg-white border border-charcoal-200 rounded-xl text-base text-charcoal-900 placeholder:text-muted/70 focus:outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 transition";

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="block text-sm font-semibold text-charcoal-900 mb-2">
        {label}
        {required && <span className="text-gold-500 ml-1">*</span>}
      </span>
      {children}
    </label>
  );
}
