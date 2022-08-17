import {
    saveQuestion,
    getQuestion,
    getQuestions,
    updateQuestion,
    deleteQuestion,
} from '../repository/index.js';
import AppError from "../utils/appError.js";

export const saveQuestionService = async (data) => {
    const { createdBy, tags, title, description, imageUrl, numOfViews } = data;
    try {
        await saveQuestion({ createdBy, tags, title, description, imageUrl, numOfViews });
        return Promise.resolve("Successfully saved Question.");
    } catch (err) {
        throw new AppError(err.message, err.status);
    }
};

export const getQuestionService = async (id) => {
    try {
        const question = await getQuestion(id);
        return Promise.resolve(question);
    } catch (err) {
        throw new AppError(err.message, err.status);
    }
};

export const getQuestionsService = async () => {
    try {
        const questions = await getQuestions();
        return Promise.resolve(questions);
    } catch (err) {
        throw new AppError(err.message, err.status);
    }
};

export const updateQuestionService = async (id, data) => {
    try {
        const question = await updateQuestion(id, data);
        return Promise.resolve(question);
    } catch (err) {
        throw new AppError(err.message, err.status);
    }
};

export const deleteQuestionService = async (id) => {
    try {
        const question = await deleteQuestion(id);
        return Promise.resolve(question);
    } catch (err) {
        throw new AppError(err.message, err.status);
    }
};