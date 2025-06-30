    useEffect(() => {
      getLinks()
    }, [])
    

    const getLinks = async () => {

        let res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/data`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ handle }),
            });
        let data=res.json()
        sethandles(data);

    }