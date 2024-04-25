interface UseCase<T> {
  execute(input: T): void;
}
export default UseCase;
