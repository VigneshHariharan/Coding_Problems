"""The LinkedList code from before is provided below.
Add three functions to the LinkedList.
"get_position" returns the element at a certain position.
The "insert" function will add an element to a particular
spot in the list.
"delete" will delete the first element with that
particular value.
Then, use "Test Run" and "Submit" to run the test cases
at the bottom."""


class Element(object):
    def __init__(self, value):
        self.value = value
        self.next = None

class LinkedList(object):
        def __init__(self, head=None):
            self.head = head
        """ This append method will add an element
         to end of the linked list. while current.next means untill current.next is true
         it will run"""
        
        def append(self, new_element):
            current = self.head
            if self.head:
                while current.next:
                    current = current.next
                current.next = new_element
            else:
                self.head = new_element
            

        def get_position(self, position):
            """Get an element from a particular position.
            Assume the first position is "1".
            Return "None" if position is not in the list."""
            current = self.head
            counter = 1
            if position < 1:
                return None
            while current and counter <= position:
                if position == counter:
                    return current
                current = current.next
                counter = counter + 1
            return None
                
        def insert(self, new_element, position):
            """Insert a new node at the given position.
            Assume the first position is "1".
            Inserting at position 3 means between
            the 2nd and 3rd elements."""
            current = self.head
            counter = 1
            if position > 1:
                while current and current < position:
                    if position - 1 == counter:
                        new_element.next = current.next
                        current.next = new_element
                        return
                    counter = counter + 1
                    current = current.next
            elif position == 1:
                new_element.next = self.head
                self.head = new_element

        def delete(self, value):
            """Delete the first node with a given value."""
            current = self.head
            previous = None
            while current.value != value and current.next:
                previous = current
                current = current.next
            if current.value == value:
                if previous:
                    previous.next = current.next
                else:
                    self.head = current.next

                

        def replace(self,value,given_value):
            current = self.head
            while current:
                if current.value == value:
                    current.value = given_value
                    return
                current = current.next


# Test cases
# Set up some Elements
e2 = Element(2)
e3 = Element(3)
e4 = Element(4)

# Start setting up a LinkedList
ll = LinkedList(Element(5))
ll.append(Element(2))
ll.append(Element(3))

ll.append(Element(4))
ll.append(Element(5))

ll.insert(Element(4), 1)
ll.insert(Element(5),2)
ll.insert(Element(3),3)

ll.delete(3)
ll.delete(4)
ll.delete(4)

for i in range(1,6):
    print("loop ", ll.get_position(i).value)
