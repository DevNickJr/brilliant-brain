import { FormEvent, useEffect, useReducer, useState, useRef, useCallback } from 'react'
import Head from "next/head";
import AdminLayout from "@/layouts/AdminLayout"
import AuthHOC from '@/components/AuthHOC'
import Button from '@/components/Button';
import { useRouter } from 'next/router';
import { IAmbassador, IReducerAction } from '@/interfaces'
import usePost from '@/hooks/usePost';
import { toast } from 'react-toastify';
import Loader from '@/components/Loader';
import useImage from '@/hooks/useImage';
import TinyEditor from '@/components/Editor';
import { Editor as TinyMCEEditor } from 'tinymce';
import Image from 'next/image';



const initialState: IAmbassador = {
    email: '',
    name: '',
    image: '',
    number: '',
    title: '',
    description: '',
}

type IAction = 'email' | 'name' | 'image' | 'number' | 'title' | 'description' | 'reset' | 'update'

const EditAmbassador = () => {
    const [loading, setLoading] = useState(false)
    const [ambassador, dispatch] = useReducer((state: IAmbassador, action: IReducerAction<IAction>) => {
        if (action.type === 'reset') return initialState
        if (action.type === 'update') {
            if (typeof action.data !== 'string') 
            return { ...state, ...action.data }
        }
        return { ...state, [action.type]: action.payload }
    }, initialState)
    const { url, uploadImage, error: errorImage, progress, setError, loading: uploadingImage } = useImage()

    const editorRef = useRef<TinyMCEEditor | null>(null);

    const router = useRouter()    
    const { id } = router.query

    const { loading: posting, error, data, post } = usePost({ 
        api: `/ambassadors/${id}`,
        method: 'PATCH',
        onSuccess: () => {
            toast('Ambassador Updated')
            dispatch({ type: 'reset'})
            router.push('/admin/ambassadors')
        } 
    })

    const updateAmbassador = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log({ambassador, description: editorRef.current?.getContent()})
        post({...ambassador, description: editorRef.current?.getContent()})
        // post(ambassador)
    }

    
    useEffect(() => {
        if (url) {
            dispatch({ type: 'image', payload: url })
        }
    }, [url])

    const fetchAmbassador = useCallback(
        async () => {
            try {
              setLoading(true)
              const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/ambassadors/${id}`)
              const data = await res.json()
              
              if (!res.ok) throw new Error(data.message)
      
              // console.log({data})
              dispatch({ type: 'update', data: data })
            //   dispatch({ type: 'description', payload: editorRef.current?.getContent() })
              editorRef.current?.setContent(data.description)

            } catch (error) {
              console.log({error})
            }
            setLoading(false)
          },
      [id],
    )
     
    useEffect(() => {
        fetchAmbassador()
      }, [id, fetchAmbassador])
    

    return (
        <AdminLayout>
        <Head>
            <title>Brilliant Brains</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/faviconimg.png" />
        </Head>
        {(loading || posting || uploadingImage) && <Loader modalOpen={true} />}
        <div className='p-4 py-12 sm:px-12 h-full overflow-y-auto'>
            <div className="flex items-center gap-4 justify-between mb-16">
                <h1 className='text-3xl text-black/70 font-argentinum'>Edit Ambassador</h1>
                <Button onClick={() => router.push("/admin/ambassadors")} className="text-white px-4 sm:px-6 py-2 rounded-xl text-sm">View Ambassadors</Button>
            </div>
            <form className="flex flex-col gap-4" onSubmit={updateAmbassador}>
                <div className="flex flex-col gap-1">
                    <label htmlFor="name" className="text-black/70">Name</label>
                    <input required onChange={(e) => dispatch({ type: 'name', payload: e.target.value })} value={ambassador?.name} type="text" name="name" id="name" className="border border-black/20 rounded-md p-2" />
                </div>
                <div className="flex flex-col gap-1">
                    <label htmlFor="email" className="text-black/70">Email</label>
                    <input required onChange={(e) => dispatch({ type: 'email', payload: e.target.value })} value={ambassador?.email} type="email" name="email" id="email" className="border border-black/20 rounded-md p-2" />
                </div>
                {/* <div className="flex flex-col gap-1">
                    <span className="text-black/70">Upload Image</span>
                    <label className="border border-black/20 rounded-md p-2 min-h-[42px] max-h-12 whitespace-nowrap overflow-hidden bg-white" htmlFor="image">
                        {ambassador?.image ? ambassador?.image : ''}
                    </label>

                    <input type='file' name='image' id='image' className='w-0 h-0 invisible' onChange={(e) => uploadImage(e.target.files![0])} />
                </div> */}
                <div className="flex flex-col gap-1">
                    <label htmlFor="number" className="text-black/70">Phone</label>
                    <input required onChange={(e) => dispatch({ type: 'number', payload: e.target.value })} value={ambassador?.number} type="tel" name="number" id="number" className="border border-black/20 rounded-md p-2" />
                </div>
                <div className="flex flex-col gap-1">
                    <label htmlFor="title" className="text-black/70">Title</label>
                    <input required onChange={(e) => dispatch({ type: 'title', payload: e.target.value })} value={ambassador?.title} type="text" name="title" id="title" className="border border-black/20 rounded-md p-2" />
                </div>
                <div className="flex flex-col gap-1">
                    <label htmlFor="description" className="text-black/70">Description</label>
                    {/* <textarea rows={5} required onChange={(e) => dispatch({ type: 'description', payload: e.target.value })} value={ambassador?.description} name="description" id="description" className="border border-black/20 rounded-md p-2" /> */}
                    <TinyEditor editorRef={editorRef} />
                </div>
                <div className="flex flex-col gap-1">
                        <span className="text-black/70">Upload Image</span>
                         {ambassador?.image &&
                            <Image width={100} height={100} src={ambassador?.image} alt="" className="h-24 w-24 bg-gray-100 object-cover z-10 relative" />
                         }
                        <input type='file' name='image' id='image' className='' onChange={(e) => uploadImage(e.target.files![0])}  />
                        {/* {uploadingImage && <p>Uploading Image {progress}%</p>} */}
                </div>
                {/* <div className="flex flex-col gap-1">
                    <label htmlFor="level" className="text-black/70">Level</label>
                    <select required onChange={(e) => dispatch({ type: 'email', payload: e.target.value })} value={ambassador?.name} name="level" id="level" className="border border-black/20 rounded-md p-2">
                        <option value="">--</option>
                        <option value="1">Level 1</option>
                        <option value="2">Level 2</option>
                        <option value="3">Level 3</option>
                    </select>
                </div> */}
                <div className="flex items-center gap-4 mt-8">
                    <Button type='submit' className="text-white px-4 sm:px-6 py-2 rounded-md text-sm">Update</Button>
                </div>
            </form>
        </div>
        </AdminLayout>
    );
}


export default AuthHOC(EditAmbassador)
