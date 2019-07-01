const LinkedList=()=>{
    let length=0;
    let head=null;

    const Node=(element)=>{
        this.element=element;
        this.next=null;
    };

    this.size=()=>{
        return length;
    }

    this.head=()=>{
        return head;
    }

    this.add=(element)=>{
        const node=new Node(element);
        if(head===null){
            //if the link-list is empty, then the head is the first node
            head=node;
        }else{
            let currentNode=head;

            while(currentNode.next){
                currentNode=currentNode.next;
            }

            current.next=node;
        }

        length++;
    };

    this.remove=(element)=>{
        let currentNode=head;
        let previousNode;
        if (currentNode.element===element) {
            head=currentNode.next;
        } else {
            while (currentNode.element !==element) {
                prviousNode=currentNode;
                currentNode=currentNode.next;
            }

            previousNode.next=current.next;
        }
        length--;
    };

    this.isEmpty=()=>{
        return length===0;
    };

    this.indexOf=(element)=>{
        let currentNode=head;
        let index=-1;

        while (currentNode) {
            index++;
            if (currentNode.element===element) {
                return index;
            }
            currentNode=currentNode.next;
        }
        return -1;
    };






}