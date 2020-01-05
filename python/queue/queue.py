from collections import deque
class Queue:
    def __init__(self, head=None):
        self.storage = [head]

    def enqueue(self, new_element):
        self.storage.append(new_element)

    def peek(self):
        return self.storage[0]

    def enqueue(self):
        return self.storage.pop(0)

q = Queue(1)
q.enqueue(2)
q.enqueue(3)

print q.peek()

print q.dequeue()

print q.dequeue()

print q.dequeue()

q.enqueue(5)

print q.peek()
