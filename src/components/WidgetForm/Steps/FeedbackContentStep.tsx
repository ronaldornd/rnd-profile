import { ArrowLeft } from "@phosphor-icons/react";
import { FormEvent, useState } from "react";
import { FeedbackType, feedbackTypes } from "..";
import { supabase } from "../../../../supabaseClient";
import { CloseButton } from "../../CloseButton";
import { Loading } from "../Loading";

interface FeedbackContentStepProps {
  feedbackType: FeedbackType;
  onFeedbackRestartRequested: () => void;
  onFeedbackSent: () => void;
}

export function FeedbackContentStep({
  feedbackType,
  onFeedbackRestartRequested,
  onFeedbackSent,
}: FeedbackContentStepProps) {
  const feedbackTypeInfo = feedbackTypes[feedbackType];
  const [comment, setComment] = useState<string | null>();
  const [isSendingFeedback, setIsSendingFeedback] = useState(false);

  async function handleSubmitFeedback(event: FormEvent) {
    event.preventDefault();
    setIsSendingFeedback(true);
    const access_id = localStorage.getItem("accessId");

    const { data, error } = await supabase
      .from("feedbacks")
      .insert([{ type: feedbackType, comment, access_id }]);

    if (error) {
      console.error("Erro ao enviar feedback:", error);
    } else {
      console.log("Feedback enviado com sucesso:", data);
      onFeedbackSent();
    }

    setIsSendingFeedback(false);
  }

  return (
    <>
      <header className="w-full ml-52 justify-between flex-row flex">
        <button
          type="button"
          className="top-5 left-5 absolute text-zinc-400  hover:text-zinc-100"
          onClick={onFeedbackRestartRequested}
        >
          <ArrowLeft weight="bold" className="w-4 h-4" />
        </button>
        <span className="text-xl leading-6 flex text-center gap-2">
          <img
            src={feedbackTypeInfo.image.source}
            alt={feedbackTypeInfo.image.alt}
            className="w-6 h-6"
          />
          {feedbackTypeInfo.title}
        </span>
        <CloseButton />
      </header>
      <form className="my-3 w-full" onSubmit={handleSubmitFeedback}>
        <textarea
          className="min-w-[304px] w-full min-h-[112px] text-sm placeholder-zinc-400 text-zinc-100 border-zinc-600 bg-transparent rounded-md resize-none focus:border-green-500 focus:ring-green-500 focus:ring-2 focus:outline-none srcollbar scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin"
          placeholder="Conte mais sobre o que está acontecendo:"
          onChange={(event) => setComment(event.target.value)}
        ></textarea>
        <footer className="flex flex-row gap-2">
          <button
            type="submit"
            disabled={comment?.length === 0 || isSendingFeedback}
            className="p-2 bg-green-600 rounded-md border-transparent flex-1 flex justify-center items-center  hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-800 focus:ring-offset-2 focus:ring-offset-zinc-900 transition-colors disabled:bg-green-600 text-black font-bold disabled:hover:bg-green-600"
          >
            {isSendingFeedback ? <Loading /> : "Enviar feedback!"}
          </button>
        </footer>
      </form>
    </>
  );
}
