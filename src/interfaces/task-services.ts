export interface CreateTaskProps {
  title: string;
  description: string;
  images: Array<string>;
}

export interface UpdateTaskProps {
  id: string;
  title: string;
  description: string;
  images: Array<string>;
}

export interface ChangeTaskCompletionProps {
  id: string;
}

export interface DeleteTaskProps {
  id: string;
}

export interface CreateUserProps {
  name: string;
  email: string;
  password: string;
}

export interface LoginUserProps {
  email: string;
  password: string;
}
