import { describe, expect, test } from "@jest/globals";
import Queue from "@code/queue";

test("queue", function () {
    const list = new Queue<number>();

    expect(list.length).toBe(0);
    expect(list.peek()).toEqual(undefined);
    expect(list.deque()).toEqual(undefined);

    list.enqueue(5);
    list.enqueue(7);
    list.enqueue(9);

    expect(list.deque()).toEqual(5);
    expect(list.length).toEqual(2);

    list.enqueue(11);
    expect(list.deque()).toEqual(7);
    expect(list.deque()).toEqual(9);
    expect(list.peek()).toEqual(11);
    expect(list.deque()).toEqual(11);
    expect(list.deque()).toEqual(undefined);
    expect(list.length).toEqual(0);

    list.enqueue(69);
    expect(list.peek()).toEqual(69);
    expect(list.length).toEqual(1);
});
