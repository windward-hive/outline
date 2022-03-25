import { Comment } from "@server/models";

export default function present(comment: Comment) {
  return {
    id: comment.id,
    data: comment.data,
    documentId: comment.documentId,
    parentCommentId: comment.parentCommentId,
    createdBy: comment.createdBy,
    createdById: comment.createdById,
    createdAt: comment.createdAt,
    updatedAt: comment.updatedAt,
  };
}