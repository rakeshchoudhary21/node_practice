Sockets:
    Node has two modules for doing this stuff- net and tls.
    tls is more secure.

    Sockets stay below the http layer and provide a point to point communication between
    a server and client.

    Here a server opens a socket and waits for clients to connect to the socket via the socket address
    which is a combination of server address and port.

    net module does socket communication by sending raw data using TCP, this protocol is responsible for
    packaging data and gauranteeing that it is sent from point to point successfully.

    And also, sockets are much lighter weight than the http module. and therefore if u are just sending data from
    point to point using sockets is recommended.

    And its good solution for sharing data between two processes. You can open the same socket in both the
    processes and share the data.