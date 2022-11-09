import React from "react";
import useTitle from "../../hooks/useTitle";

const Blog = () => {
  useTitle("Blog");
  return (
    <div className="mx-6 pb-6">
      <h1 className="my-10 text-center text-3xl">
        Some important question about Web Development.
      </h1>
      <div className="mt-5 p-6 bg-base-300 border-2 rounded-xl">
        <h3 className="font-bold">
          Question 01: Difference between SQL and NoSQL?
        </h3>
        <p>
          <strong>Ans</strong>: SQL has been around for over 40 years, so it is
          recognizable, documented, and widely-used. Safe and versatile, it’s
          particularly well suited for complex queries. However, SQL restricts
          the user to working within a predefined tabular schema, and more care
          must be taken to organize and understand the data before it is used.
          The dynamic schemata of NoSQL databases allow representation of
          alternative structures, often alongside each other, encouraging
          greater flexibility. There is less emphasis on planning, greater
          freedom when adding new attributes or fields, and the possibility of
          varied syntax across databases. As a group, however, NoSQL languages
          lack the standard interface which SQL provides, so more complex
          queries can be difficult to execute. SQL databases can be scaled
          horizontally as well, though sharding or partitioning logic is often
          the user’s onus and not well supported. NoSQL technologies are diverse
          and while many rely on the master-slave architecture, options for
          scaling vertically also exist. SQL databases represent massive
          communities, stable codebases, and proven standards. Multitudes of
          examples are posted online and experts are available to support those
          new to programming relational data. NoSQL technologies are being
          adopted quickly, but communities remain smaller and more fractured.
          However, many SQL languages are proprietary or associated with large
          single-vendors, while NoSQL communities benefit from open systems and
          concerted commitment to onboarding users.
        </p>
      </div>
      <div className="mt-5 p-6 bg-base-300  border-2 rounded-xl">
        <h3 className="font-bold">
          Question 02 : What is JWT, and how does it work?
        </h3>
        <p>
          <strong>Ans</strong>: JSON Web Token (JWT) is an open standard (RFC
          7519) that defines a compact and self-contained way for securely
          transmitting information between parties as a JSON object. This
          information can be verified and trusted because it is digitally
          signed. JWTs can be signed using a secret (with the HMAC algorithm) or
          a public/private key pair using RSA or ECDSA. Although JWTs can be
          encrypted to also provide secrecy between parties, we will focus on
          signed tokens. Signed tokens can verify the integrity of the claims
          contained within it, while encrypted tokens hide those claims from
          other parties. When tokens are signed using public/private key pairs,
          the signature also certifies that only the party holding the private
          key is the one that signed it.In authentication, when the user
          successfully logs in using their credentials, a JSON Web Token will be
          returned. Since tokens are credentials, great care must be taken to
          prevent security issues. In general, you should not keep tokens longer
          than required.This can be, in certain cases, a stateless authorization
          mechanism. The server's protected routes will check for a valid JWT in
          the Authorization header, and if it's present, the user will be
          allowed to access protected resources. If the JWT contains the
          necessary data, the need to query the database for certain operations
          may be reduced, though this may not always be the case.
        </p>
      </div>
      <div className="mt-5 p-6 bg-base-300  border-2 rounded-xl">
        <h3 className="font-bold">
          Question 03 : What is the difference between javascript and NodeJS?
        </h3>
        <p>
          <strong>Ans</strong>: JavaScript is a client-side scripting language
          that is lightweight, cross-platform, and interpreted. Both Java and
          HTML include it. Node.js, on the other hand, is a V8-based server-side
          programming language. As a result, it is used to create
          network-centric applications. It's a networked system made for
          data-intensive real-time applications. If we compare node js vs.
          python, it is clear that node js will always be the preferred option.
          JavaScript is a simple programming language that can be used with any
          browser that has the JavaScript Engine installed. Node.js, on the
          other hand, is an interpreter or execution environment for the
          JavaScript programming language. It requires libraries that can be
          conveniently accessed from JavaScript programming to be more
          helpful.Any engine may run JavaScript. As a result, writing JavaScript
          is incredibly easy, and any working environment is similar to a
          complete browser. Node.js, on the other hand, only enables the V8
          engine. Written JavaScript code, on the other hand, can run in any
          context, regardless of whether the V8 engine is supported.A specific
          non-blocking operation is required to access any operating system.
          There are a few essential objects in JavaScript, but they are entirely
          OS-specific. Node.js, on the other hand, can now operate non-blocking
          software tasks out of any JavaScript programming. It contains no
          OS-specific constants. Node.js establishes a strong relationship with
          the system files, allowing companies to read and write to the hard
          drive.
        </p>
      </div>
      <div className="mt-5 p-6 bg-base-300  border-2 rounded-xl">
        <h3 className="font-bold">
          Question 04 : How does NodeJS handle multiple requests at the same
          time?
        </h3>
        <p>
          <strong>Ans</strong>: A multithreaded app fails big if you need to
          allocate lots of RAM per thread. First, the RAM usage itself means you
          can't handle as many requests as a singlethreaded app. Worse, malloc
          is slow. Allocating lots and lots of objects (which is common for
          modern web frameworks) means we can potentially end up being slower
          than singlethreaded apps. This is where node.js usually win. One
          use-case that end up making multithreaded worse is when you need to
          run another scripting language in your thread. First you usually need
          to malloc the entire runtime for that language, then you need to
          malloc the variables used by your script. So if you're writing network
          apps in C or go or java then the overhead of threading will usually
          not be too bad. If you're writing a C web server to serve PHP or Ruby
          then it's very easy to write a faster server in javascript or Ruby or
          Python.Some web servers use a hybrid approach. Nginx and Apache2 for
          example implement their network processing code as a thread pool of
          event loops. Each thread runs an event loop simultaneously processing
          requests single-threaded but requests are load-balanced among multiple
          threads. Some single-threaded architectures also use a hybrid
          approach. Instead of launching multiple threads from a single process
          you can launch multiple applications - for example, 4 node.js servers
          on a quad-core machine. Then you use a load balancer to spread the
          workload amongst the processes. In effect the two approaches are
          technically identical mirror-images of each other.
        </p>
      </div>
    </div>
  );
};

export default Blog;
